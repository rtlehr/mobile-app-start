# Mobile App Starter (Angular + Ionic + Capacitor + SQLite + Bootstrap)

This project is a mobile app starter template using the following stack:

- Angular
- Ionic
- Capacitor
- SQLite (via @capacitor-community/sqlite)
- Bootstrap (with SCSS)

---

## 🚀 1. Create This Tech Stack From Scratch

### ✅ Prerequisites

- [Node.js (LTS)](https://nodejs.org/)
- [Git](https://git-scm.com/)
- (Optional) Android Studio / Xcode for mobile testing

### 📦 Install CLI Tools

```bash
npm install -g @angular/cli @ionic/cli
```

### 🛠 Create the Project

```bash
ionic start my-mobile-app blank --type=angular
cd my-mobile-app
```

### 🔌 Add Capacitor

```bash
npm install @capacitor/core @capacitor/cli
npx cap init
```

- App name: `MyMobileApp`
- App ID: `com.example.mobileapp`

### 📱 Add Platforms

```bash
npm run build
npx cap add android
# npx cap add ios  # macOS only
npx cap sync
```

### 🎨 Add Bootstrap (SCSS)

```bash
npm install bootstrap
```

In `src/styles.scss` (create it if it doesn’t exist):

```scss
@import "bootstrap/scss/bootstrap";
```

In `angular.json`, update styles array:

```json
"styles": [
  "src/styles.scss"
]
```

Delete or ignore `src/styles.css`.

---

### 💾 Install SQLite

```bash
npm install cordova-sqlite-storage
npm install @capacitor-community/sqlite
npx cap sync
```

Native setup:

- Open Android Studio and sync Gradle (`npx cap open android`)
- For iOS, open Xcode (`npx cap open ios`)

---

## ✅ 2. Clone & Set Up From GitHub

### 📥 Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 📦 Install Dependencies

```bash
npm install
```

### 🔧 Build the App

```bash
npm run build
```

### 🔄 Sync Capacitor

```bash
npx cap sync
```

### 🧪 Run on Device or Emulator

```bash
npx cap open android
# npx cap open ios  # macOS only
```

---

## 🧰 Dev Notes

- Global styles go in `src/styles.scss`
- Use Bootstrap utility classes (`.container`, `.row`, `.btn`, etc.)
- Use Angular services for SQLite interaction
- All native plugins must be rebuilt and synced via `npx cap sync`

---

## 🛟 Helpful Commands

```bash
ionic serve              # Run in browser
npm run build            # Build web assets
npx cap sync             # Sync Capacitor plugins and assets
npx cap open android     # Open Android Studio
npx cap open ios         # Open Xcode (macOS only)
```

---
