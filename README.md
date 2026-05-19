# Her Long Game — Landing Page

Coming soon landing page for [herlonggame.com.au](https://herlonggame.com.au)

Built with plain HTML/CSS/JS — no framework, no build step, no dependencies except Google Fonts (loaded via CDN).

---

## 🚀 Deploy to GitHub Pages (step by step)

### 1. Create the GitHub repository

1. Go to [github.com](https://github.com) and sign in (or create a free account)
2. Click the **+** icon → **New repository**
3. Name it: `herlonggame` (or any name you like)
4. Set to **Public**
5. **Do not** tick "Add a README" — you already have one
6. Click **Create repository**

---

### 2. Push this folder to GitHub

Open Terminal (Mac) or Command Prompt (Windows) and run:

```bash
# Navigate to this folder
cd path/to/herlonggame-repo

# Initialise git
git init

# Add all files
git add .

# First commit
git commit -m "Initial launch page"

# Connect to your GitHub repo (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/herlonggame.git

# Push
git branch -M main
git push -u origin main
```

---

### 3. Enable GitHub Pages

1. In your GitHub repo, go to **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **Deploy from a branch**
3. Branch: `main` / Folder: `/ (root)`
4. Click **Save**

GitHub will give you a URL like: `https://YOUR_USERNAME.github.io/herlonggame`

Your site is now live. ✅

---

### 4. Connect your custom domain (herlonggame.com.au)

**Step 1 — Add domain in GitHub Pages settings**

1. In **Settings → Pages**, under **Custom domain**, type: `herlonggame.com.au`
2. Click **Save**
3. This creates a `CNAME` file in your repo automatically

**Step 2 — Update DNS at your domain registrar**

Log into wherever you registered `herlonggame.com.au` (e.g. Namecheap, GoDaddy, Squarespace, Google Domains, etc.)

Add these DNS records:

| Type  | Host | Value                 |
|-------|------|-----------------------|
| A     | @    | 185.199.108.153       |
| A     | @    | 185.199.109.153       |
| A     | @    | 185.199.110.153       |
| A     | @    | 185.199.111.153       |
| CNAME | www  | YOUR_USERNAME.github.io |

**Step 3 — Enable HTTPS**

Back in GitHub Pages settings, once DNS has propagated (can take up to 48 hours, usually under 1 hour), tick **Enforce HTTPS**.

Your site will then be live at `https://herlonggame.com.au` with a free SSL certificate. ✅

---

## 📁 File structure

```
herlonggame-repo/
├── index.html          ← The entire site (HTML + CSS + JS inline)
├── CNAME               ← Your custom domain (auto-created by GitHub Pages)
├── README.md           ← This file
├── .gitignore          ← Tells git what to ignore
└── assets/
    ├── images/         ← Drop logo and any future images here
    ├── css/            ← Reserved for future stylesheet extractions
    └── js/             ← Reserved for future script extractions
```

---

## ✏️ Making changes after launch

Edit `index.html`, then:

```bash
git add .
git commit -m "describe your change"
git push
```

GitHub Pages redeploys automatically within ~60 seconds.

---

## 📧 Connecting email capture (Mailchimp / ConvertKit)

The waitlist forms are wired to a `submitForm()` function in `index.html`.

Search for `submitForm` in `index.html` and replace the comment with your provider's API call.

**Example for Mailchimp:**
Find this line:
```js
// Here you'd fire to your actual email capture service (Mailchimp, ConvertKit, etc.)
```
Replace with your Mailchimp embed form action URL or use their JavaScript API.

Alternatively, replace the `<form>` inputs with a Mailchimp/ConvertKit embedded form — both providers give you HTML you can drop straight in.

---

## 🎨 Brand

- **Primary font:** Playfair Display (hero), Cormorant Garamond (headings/editorial), Jost (body)
- **Colours:** Bitcoin Orange `#E8751A` · Sage Deep `#5C7A62` · Cream `#F7F5F0` · Night `#161E17` · Soft Gold `#D4A853`
- **Tone:** Warm · Direct · Editorial · No jargon without translation

---

*Her Long Game — Sound money is the tool. Agency is the result.*
