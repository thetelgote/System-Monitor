<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0EA5E9,100:22C55E&height=200&section=header&text=System%20Monitor&fontSize=65&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=Real-Time%20Server%20Health%20Dashboard%20%E2%80%A2%20Flask%20%2B%20psutil&descAlignY=55&descSize=17" width="100%"/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=2500&pause=800&color=22C55E&center=true&vCenter=true&width=650&lines=Live+CPU%2C+RAM%2C+Disk+%26+Network+stats+%F0%9F%96%A5%EF%B8%8F;Smart+threshold-based+alerts+%F0%9F%9A%A8;Zero+external+dependencies+for+metrics+%E2%9A%99%EF%B8%8F;Deploys+anywhere+with+Gunicorn+%F0%9F%9A%80;Built+with+Flask+%2B+psutil+%F0%9F%90%8D" alt="Typing SVG" />

<br/>

[![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-black?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![psutil](https://img.shields.io/badge/psutil-System%20Metrics-4B8BBE?style=for-the-badge&logo=python&logoColor=white)](https://github.com/giampaolo/psutil)
[![Gunicorn](https://img.shields.io/badge/Gunicorn-WSGI-499848?style=for-the-badge&logo=gunicorn&logoColor=white)](https://gunicorn.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](#-license)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](#-contributing)
[![Made with ❤](https://img.shields.io/badge/Made%20with-%E2%9D%A4-red.svg?style=flat-square)](#)

[Overview](#-overview) •
[Features](#-features) •
[Tech Stack](#-tech-stack) •
[Architecture](#-architecture--how-it-works) •
[Getting Started](#-getting-started) •
[API Reference](#-api-reference) •
[Deployment](#-deployment) •
[Contributing](#-contributing)

<br/>

![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fthetelgote%2FSystem-Monitor&label=Repo%20Views&labelColor=%23222&countColor=%2322C55E&style=flat)
![GitHub last commit](https://img.shields.io/github/last-commit/thetelgote/System-Monitor?style=flat-square&color=0EA5E9)
![GitHub repo size](https://img.shields.io/github/repo-size/thetelgote/System-Monitor?style=flat-square&color=22C55E)
![GitHub stars](https://img.shields.io/github/stars/thetelgote/System-Monitor?style=flat-square&color=yellow)
![Status](https://img.shields.io/badge/status-active%20development-brightgreen?style=flat-square&logo=statuspage)

</div>

---

## 📖 Overview

**System Monitor** is a lightweight, self-hosted web dashboard that watches your machine's vital signs in real time — CPU load, memory usage, disk space, network I/O, process count, uptime, and (where supported) CPU temperature — and raises clear alerts the moment something crosses a healthy threshold.

No agents, no external monitoring SaaS, no config files — clone it, run it, and you have a live health dashboard for any machine it's deployed on.

<div align="center">

### 🔗 [**Live Demo**](https://your-deployed-app-url.onrender.com) &nbsp;·&nbsp; [**Report a Bug**](https://github.com/thetelgote/System-Monitor/issues)

![Deploy Status](https://img.shields.io/website?url=https%3A%2F%2Fyour-deployed-app-url.onrender.com&up_message=online&down_message=offline&style=for-the-badge&label=dashboard)

</div>

> 🎥 **Tip:** Record a short GIF of the live dashboard updating (CPU spiking, an alert firing) with [ScreenToGif](https://www.screentogif.com/) or [Kap](https://getkap.co/), save it to `docs/demo.gif`, and embed it here:
> ```md
> ![System Monitor demo](./docs/demo.gif)
> ```
> A moving dashboard preview is the single most persuasive thing a recruiter will see on this repo — nothing sells "I can build real, live-updating tools" faster.

---

## ✨ Features

| | |
|---|---|
| 📊 **Live System Metrics** | CPU %, memory %, disk usage %, process count, network sent/received (MB), and uptime, refreshed continuously |
| 🌡️ **CPU Temperature** | Reads hardware sensors where available, gracefully falls back to `N/A` when not supported |
| 🚨 **Smart Alerting** | Automatic threshold checks — CPU > 80%, memory > 80%, disk > 90%, temp > 80° — each escalating the system status |
| 🟢🟡🔴 **Status Levels** | Rolls all checks into a single `Healthy` / `Warning` / `Critical` status for an at-a-glance read |
| 🕒 **Alert History** | Keeps the last 10 unique alerts with timestamps, so you can see what happened and when |
| 🌐 **Simple JSON API** | A single `/health` endpoint returns everything the frontend needs — easy to consume from anywhere |
| ⚡ **Zero-config Frontend** | Server-rendered dashboard (Flask + Jinja) with a small vanilla JS layer (`sam.js`) polling for updates |
| 🚀 **Production-ready** | Ships with a `Procfile` and `gunicorn`, ready to deploy on Render, Heroku, Railway, or any WSGI host |

---

## 🛠 Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=python,flask,javascript,html,css,git,github&theme=dark&perline=7" alt="Tech stack icons" />

<br/><br/>

| Layer | Technology |
|---|---|
| **Backend** | Python, Flask |
| **System Metrics** | [psutil](https://github.com/giampaolo/psutil) (CPU, memory, disk, network, sensors, process count) |
| **Frontend** | Jinja2-rendered HTML, CSS, vanilla JavaScript (`sam.js`) |
| **WSGI Server** | Gunicorn |
| **Deployment** | Procfile-based (Render / Heroku-style platforms) |

</div>

---

## 🏗 Architecture & How It Works

```
System-Monitor/
├── app.py            # Flask app — routes, request handling, alert history
├── monitor.py         # Collects raw system metrics via psutil
├── alerts.py           # Applies thresholds to metrics → alerts + status
├── templates/
│   └── index.html       # Dashboard shell rendered by Flask
├── static/
│   └── sam.js             # Client-side polling — fetches /health and updates the UI
├── requirements.txt
└── Procfile             # gunicorn app:app — production entry point
```

**Data flow, end to end:**

```
Browser (sam.js, polling)
      │  GET /health
      ▼
app.py  ──▶  monitor.get_system_health()  ──▶  psutil (CPU / RAM / disk / net / temp)
      │
      ▼
alerts.check_alerts(data)  ──▶  thresholds → [alerts...], status
      │
      ▼
JSON response: { data, alerts, status, history }
      │
      ▼
Browser updates dashboard + alert feed in place
```

**Key design details:**

- `monitor.py` isolates *all* system-metric collection — CPU/memory/disk percentages, network counters converted to MB, uptime derived from `psutil.boot_time()`, and a best-effort CPU temperature read that safely degrades to `"N/A"` on platforms without sensor support (e.g. most cloud hosts).
- `alerts.py` is a pure function: metrics in, `(alerts, status)` out — easy to unit test or extend with new thresholds.
- `app.py` keeps a rolling in-memory `alert_history`, deduplicating consecutive identical alerts so the feed doesn't spam the same warning every poll cycle.
- The frontend is intentionally dependency-light: `sam.js` polls `/health` and updates the DOM directly, no frontend framework or build step required.

---

## 🚀 Getting Started

### Prerequisites

- **Python** ≥ 3.8
- `pip` for installing dependencies

### 1. Clone the repository

```bash
git clone https://github.com/thetelgote/System-Monitor.git
cd System-Monitor
```

### 2. Create a virtual environment (recommended)

```bash
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the app

```bash
python app.py
```

The dashboard will be available at **`http://127.0.0.1:5000`**. 🎉

Metrics refresh automatically as `sam.js` polls the `/health` endpoint — no page reload needed.

### 5. Run in production mode (optional, local test)

```bash
gunicorn app:app
```

---

## 📡 API Reference

Base URL: `http://127.0.0.1:5000`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Renders the dashboard (`index.html`) |
| GET | `/health` | Returns live system metrics, active alerts, overall status, and recent alert history as JSON |

**Example `/health` response:**

```json
{
  "data": {
    "cpu": 23.4,
    "memory": 61.2,
    "disk": 47.8,
    "processes": 214,
    "net_sent": 152.34,
    "net_recv": 980.12,
    "uptime": 93042,
    "system": "Linux",
    "cpu_temp": 52.0
  },
  "alerts": [],
  "status": "Healthy",
  "history": [
    { "message": "🔥 High CPU Usage", "time": "14:32:10" }
  ]
}
```

**Alert thresholds:**

| Metric | Warning | Critical |
|---|---|---|
| CPU usage | > 80% | — |
| Memory usage | > 80% | — |
| Disk usage | — | > 90% |
| CPU temperature | — | > 80° |

---

## 📦 Deployment

The repo ships with everything needed for a one-click deploy to any Heroku-style platform (Render, Railway, Heroku):

```
Procfile → web: gunicorn app:app
```

**To deploy on Render:**
1. Push this repo to GitHub (already done ✅)
2. Create a new **Web Service** on [Render](https://render.com), pointing at this repo
3. Build command: `pip install -r requirements.txt`
4. Start command: `gunicorn app:app`
5. Deploy — Render will detect the `Procfile` automatically

> ⚠️ Note: CPU temperature sensors are typically unavailable on cloud VMs/containers — `cpu_temp` will report `"N/A"` in most hosted environments. This is expected and handled gracefully by the app.

---

## 🗺 Roadmap

- [ ] WebSocket-based live updates instead of polling
- [ ] Historical charts (CPU/memory trend over time)
- [ ] Configurable alert thresholds via environment variables
- [ ] Email/Slack notifications on `Critical` status
- [ ] Multi-host monitoring (dashboard for several machines at once)
- [ ] Unit tests for `monitor.py` and `alerts.py`

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=16&duration=3000&pause=1000&color=94A3B8&center=true&vCenter=true&width=550&lines=Made+with+%E2%9D%A4%EF%B8%8F+to+keep+an+eye+on+your+machines;Star+%E2%AD%90+the+repo+if+you+found+it+useful!" alt="Footer typing SVG" />

[![Star History Chart](https://api.star-history.com/svg?repos=thetelgote/System-Monitor&type=Date)](https://star-history.com/#thetelgote/System-Monitor&Date)

<a href="#">⬆ Back to top</a>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:22C55E,100:0EA5E9&height=120&section=footer" width="100%"/>

</div>
