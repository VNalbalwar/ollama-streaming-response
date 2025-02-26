# 📡 Streamify - Real-Time Response Streaming

## ⚡ What is Streamify?
Streamify is a **super smooth, real-time response streaming app** built with **Next.js 15**. It gives you that instant **drip-feed** of responses, no lags, no delays—just straight-up live text generation. 🚀

---

## 🔥 Features
- **Real-time response streaming** 🏎️💨
- **Sleek & minimal UI** 🎨
- **Super lightweight & fast** ⚡
- **Built using Next.js 15** (because modern problems need modern solutions 😎)

---

## 🛠️ Setup Guide

### **1️⃣ Clone the Repo**
```bash
 git clone https://github.com/VNalbalwar/ollama-stream-response.git
 cd ollama-stream-response
```

### **2️⃣ Install Dependencies**
```bash
 npm install  # or yarn install
```

### **3️⃣ Make Sure You Have Ollama Server Running**
This app depends on **Ollama Server** (which should be running on its default port `11434`). If you don’t have it yet, install & start it:
```bash
 ollama serve
```

_(No Ollama, no streaming—so don’t skip this step!)_ 🚀

### **4️⃣ Ensure You Have the Right Model Downloaded**
The app requires a **specific model** to function properly. **Make sure you have the correct model name set** in the code and that it's **downloaded locally in Ollama**. If not, you may need to tweak a few lines in the code accordingly. ⚙️🛠️

### **5️⃣ Run the App**
```bash
 npm run dev  # or yarn dev
```
Boom! Your app is now live at: **http://localhost:3000** 🎉

---

## 🧐 Troubleshooting
### **Ollama Server Not Found?**
- Make sure it’s installed and running.
- Run `ollama serve` in a separate terminal.

### **Model Issues?**
- Double-check that the required model is available locally in Ollama.
- Update the model name in the code if needed.

### **Port Conflicts?**
- Default **Next.js dev server** runs on `3000`, but if that’s occupied, it’ll ask to use another port.

### **Something Else Broke?**
- Run `npm run build` and then `npm run start` to check if it’s a build issue.
- Still stuck? Drop an issue on GitHub! 🔥

---

## 💡 Wanna Contribute?
Pull requests are always welcome. Just **fork** the repo, make your magic happen, and send that PR. 💪

---

## 🚀 Shoutout to the Tech Stack
- **Next.js 15** ⚛️
- **TailwindCSS** 💅
- **Ollama Server** 🧠

---

## 🤝 Connect With Me
Made by [Viraj Nalbalwar](https://github.com/VNalbalwar). Let’s build cool stuff together! 😎🔥

