#!/usr/bin/env python3
"""
Локальный десктопный лаунчер для Gemini Desktop (чистый Chromium / Chrome, без Edge).
Запускает локальный сервер 127.0.0.1, сохраняет историю чатов в ~/.gemini-desktop/store.json
и открывает приложение в отдельном окне Chromium/Chrome (--app mode).
"""
import functools
import http.server
import json
import os
import shutil
import socketserver
import subprocess
import sys
import threading
import webbrowser
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
RENDERER_DIR = BASE_DIR / "renderer"
DATA_DIR = Path.home() / ".gemini-desktop"
STORE_FILE = DATA_DIR / "store.json"


def ensure_store():
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    if not STORE_FILE.exists():
        STORE_FILE.write_text(json.dumps({"chats": [], "settings": {}}, ensure_ascii=False, indent=2), encoding="utf-8")


class DesktopHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/api/store":
            ensure_store()
            data = STORE_FILE.read_bytes()
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(data)
            return
        if self.path == "/":
            self.path = "/index.html"
        return super().do_GET()

    def do_POST(self):
        if self.path == "/api/store":
            ensure_store()
            length = int(self.headers.get("Content-Length", "0"))
            raw = self.rfile.read(length)
            try:
                parsed = json.loads(raw.decode("utf-8"))
                STORE_FILE.write_text(json.dumps(parsed, ensure_ascii=False, indent=2), encoding="utf-8")
                resp = json.dumps({"ok": True, "path": str(STORE_FILE)}).encode("utf-8")
                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                self.wfile.write(resp)
            except Exception as exc:
                self.send_response(400)
                self.end_headers()
                self.wfile.write(str(exc).encode("utf-8"))
            return
        self.send_response(404)
        self.end_headers()

    def log_message(self, format, *args):
        pass


def find_chromium_browser():
    local_app_data = os.environ.get("LOCALAPPDATA", "")
    candidates = [
        "chromium",
        "chromium-browser",
        "google-chrome",
        "chrome",
        "/Applications/Chromium.app/Contents/MacOS/Chromium",
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        r"C:\Program Files\Chromium\Application\chrome.exe",
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    ]
    if local_app_data:
        candidates.extend([
            os.path.join(local_app_data, r"Chromium\Application\chrome.exe"),
            os.path.join(local_app_data, r"Google\Chrome\Application\chrome.exe"),
        ])
    for c in candidates:
        if os.path.isfile(c):
            return c
        found = shutil.which(c)
        if found:
            return found
    return None


def main():
    if not RENDERER_DIR.exists():
        print(f"Ошибка: не найдена папка {RENDERER_DIR}", file=sys.stderr)
        sys.exit(1)

    ensure_store()
    handler = functools.partial(DesktopHandler, directory=str(RENDERER_DIR))
    httpd = socketserver.ThreadingTCPServer(("127.0.0.1", 0), handler)
    port = httpd.server_address[1]
    url = f"http://127.0.0.1:{port}/"

    print(f"Gemini Desktop запущен локально: {url}")
    print(f"Локальное хранилище: {STORE_FILE}")

    browser = find_chromium_browser()
    if browser:
        print(f"Запуск в окне Chromium/Chrome: {browser}")
        try:
            proc = subprocess.Popen([
                browser,
                f"--app={url}",
                "--window-size=1280,840",
                "--no-first-run",
                "--no-default-browser-check",
                f"--user-data-dir={DATA_DIR / 'chromium-profile'}"
            ])
            t = threading.Thread(target=httpd.serve_forever, daemon=True)
            t.start()
            proc.wait()
            httpd.shutdown()
            return
        except Exception as exc:
            print(f"Не удалось запустить Chromium ({exc}), открываю в браузере по умолчанию...")
    else:
        print("Chromium или Google Chrome не найден в системе. Для запуска без Edge установите Chromium/Chrome или используйте Electron (npm start).")

    threading.Timer(0.4, lambda: webbrowser.open(url)).start()
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nЗавершение работы...")
        httpd.shutdown()


if __name__ == "__main__":
    main()
