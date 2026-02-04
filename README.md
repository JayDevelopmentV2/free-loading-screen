# Simple loading screen

A **clean, lightweight report menu** for FiveM that’s **easy to configure**, **powerful**, and **secure**. Built for servers that want **Discord role–based permissions** without bloat.

> Plug-and-play for small servers, scalable for large ones.

---

## ✨ Features

* ⚡ **Super Easy Config** (edit one file)
* 🧭 **Clean UI** (simple & fast)
* 🧠 **Optimized / Low Resmon**
* 🔄 **Live Permission Sync** (no restart needed)
* 🧩 **Framework Agnostic** (ESX / QBCore / Standalone)

---

## ⚙️ Installation

1. Drag the resource into your `resources` folder

2. Ensure it in your `server.cfg`



```cfg
ensure JDV2LoadingScreen
```

3. Set your **Fivemanage video** & **song name/artist name** in `script.js`

```lua
const Config = {
    serverName: "YOUR SERVER NAME",

    playlist: [
        {
            title: "Song Name",
            artist: "Artist Name",
            mp4: "https://r2.fivemanage.com/"
        },
        {
            title: "Song Name",
            artist: "Artist Name",
            mp4: "https://r2.fivemanage.com/"
        }
    ]
};
```

4. Restart your server

---

## 🧠 Configuration

Everything is controlled from **one config file**:

* Songs/artist names
* ONLY USED WITH FIVEMANAGE 

No database edits required.

---

## Config
```

Change anytime in `script.js`.

---

## 📊 Performance

* Idle: **0.00–0.01ms**
* Used: **0.02-0.03ms**

Fully optimized. No loops running when unused.

---

## 🛡️ Security

* Server-side permission checks
* Discord role validation
* Anti-trigger protection
* No client-trusted actions

---

## 🧪 Tested On

* ESX Legacy
* QBCore
* Standalone
* OneSync Infinity

---

## 🆘 Support

* If you run into any problems feel free to join the discord https://discord.gg/mf4juGerDc
---

## 📜 License

This resource is protected.
Do not redistribute or resell without permission.

---

### 🚀 Simple to use. Advanced where it matters.
