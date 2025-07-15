# 🔥 Next.js Full Stack Frontend Template

A modern, scalable, and developer-focused frontend boilerplate built with the latest tools:

- **Next.js 14 App Router**
- **React 18**
- **Tailwind CSS**
- **ShadCN UI**
- **Redux Toolkit** + **RTK Query**
- **TypeScript**

---

## 🚀 Tech Stack

| Tool            | Purpose                                                  |
|-----------------|----------------------------------------------------------|
| **Next.js**     | Routing, SSR/SSG/ISR, API layer, app router              |
| **React**       | UI logic & rendering                                     |
| **Tailwind CSS**| Utility-first styling                                    |
| **ShadCN UI**   | Accessible, themeable UI components                      |
| **Redux Toolkit**| Modern state management                                 |
| **RTK Query**   | API caching, fetching, and syncing with Redux            |
| **TypeScript**  | Type safety & scalability                                |

---

## 📂 Folder Structure

```bash
src/
├── app/                # Next.js App Router structure (layouts, pages)
│   └── layout.tsx
│   └── page.tsx
├── assets/             # Images, icons, static media
├── common/             # Shared utilities, types, constants
├── components/         # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/                # Redux store, API clients, utilities
│   └── store.ts
├── routes/             # Centralized route definitions (optional)
├── styles/             # Global and modular styles
│   └── globals.css
├── app.tsx             # Custom App wrapper with providers (Redux, etc.)
└── main.tsx            # (optional) ReactDOM mount point for custom setups
```

---

## 🛠️ Getting Started

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 2. Run the Dev Server

```bash
npm run dev
```

---

## 💅 Prettier Setup

This project includes Prettier with Tailwind plugin.

### Format all Code

```bash
npm run Format
```

---

## 🔧 Customization

- 🔁 **Theme Colors:** Easily update Tailwind/ShadCN theme tokens in `globals.css`
- 🧱 **UI Components:** Use and extend from ShadCN’s collection
- 🌍 **Routing:** App Router with file-based routing under `/app/`

---

## 📦 Production Build

```bash
npm run build
npm start
```

---

## 📄 License

This project is licensed under the MIT License.  
You're free to use, modify, and distribute it for personal or commercial purposes.

See the [LICENSE](./LICENSE) file for full details.
