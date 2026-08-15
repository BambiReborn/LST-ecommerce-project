# LST Sample E-Commerce — Shopping Cart

A responsive shopping cart page built for the **Learnable Front End Standardisation Test**. Fetches live product data and manages cart state (add, remove, update quantity, live totals) with a clean, scalable Redux architecture.

---

## 🔗 Live Demo
Click below to access the live site:  
[LST sample E-Commerce](https://naija-kitchen-chaos.vercel.app/)

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| **React + Vite** | UI library + fast dev/build tooling |
| **TypeScript** | Type safety across components, state, and API responses |
| **Vanilla CSS** | Hand-written, scoped styling — no CSS framework |
| **Redux Toolkit (RTK)** | Global state management for the cart |
| **RTK Query** | Data fetching layer for the products API (caching, loading/error states, auto-generated hooks) |
| **React Router DOM** | Client-side routing/navigation |
| **DummyJSON API** | Product data source |
| **Netlify** | Deployment |

---

## ✨ Features

- Fetch and display products from a live API
- Add products to cart
- Increase / decrease item quantity
- Remove items from cart
- Live-updating cart total (auto-recalculates on every change)
- Empty cart state
- Fully responsive layout — mobile, tablet, and desktop

---

## 🧠 State Management Overview

State is split by concern, following Redux Toolkit's "slice" pattern — each slice owns one job, nothing more.

### `productsApi` (RTK Query)
Handles all communication with the DummyJSON API.

- Defined with `createApi` + `fetchBaseQuery`
- Base URL: `https://dummyjson.com`
- Exposes an auto-generated `useGetProductsQuery()` hook
- Comes with built-in `isLoading`, `isError`, and caching — no manual `useEffect`/`fetch`/`useState` juggling required

### `cartSlice` (Redux Toolkit)
Handles all local cart state — completely separate from the API layer.

- `addToCart` — adds a product, or increments quantity if it's already in the cart
- `removeFromCart` — removes an item entirely
- `incrementQuantity` / `decrementQuantity` — adjusts quantity per item
- A selector calculates the running total (`price × quantity`, summed across all items) so the total is always derived from a single source of truth, never manually kept in sync

### Why two separate slices?
Server data (products) and client data (cart) change for different reasons and at different speeds. Keeping them apart means:
- The product list can be cached/refetched independently of cart state
- Cart state persists correctly even while product data reloads
- Each slice stays small, focused, and easy to test

---

## 📁 Project Structure

```
eslint.config.js  
index.html  
package.json  
README.md  
tsconfig.app.json  
tsconfig.json  
tsconfig.node.json  
vite.config.ts  
public/  
src/  
├── App.tsx  
├── main.tsx  
├── index.css  
├── assets/  
│   └── images/  
├── components/  
│   ├── commonComponents/  
│   │   ├── featuredPostCard.tsx  
│   │   └── productCard.tsx  
│   └── majorComponents/  
│       ├── bestServiceSection.tsx  
│       ├── betterExperienceSection.tsx  
│       ├── featuredPostSection.tsx  
│       ├── Footer.tsx  
│       ├── Header.tsx  
│       ├── heroSection.tsx  
│       ├── productSection.tsx  
│       └── ratingSection.tsx  
├── pages/  
│   ├── Home.tsx  
│   ├── About.tsx  
│   ├── Blog.tsx  
│   ├── Contact.tsx  
│   ├── Pages.tsx  
│   ├── Shop.tsx  
│   └── accountFlow/  
│       ├── Login.tsx  
│       └── Register.tsx  
└── Styles/  
	└── Home/  
		├── bestServiceSection.css  
		├── betterExperienceSection.css  
		├── featuredPostSection.css  
		├── Footer.css  
		├── HeaderAndHero.css  
		├── productSection.css  
		└── ratingSection.css  

```

---

## 🔌 API Reference

**Base URL:** `https://dummyjson.com`

| Endpoint | Description |
|---|---|
| `GET /products` | Returns a list of products (id, title, price, thumbnail, stock, discountPercentage, etc.) |

Full docs: [DummyJSON Products API](https://dummyjson.com/docs/products)

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production
npm run build
```

---

## 🌐 Deployment

Deployed on **Netlify**.

- Build command: `npm run build`
- Publish directory: `dist`

---

## 📱 Responsiveness

Layout is tested and adjusted across three breakpoints:
- Mobile — 375px
- Tablet — 768px
- Desktop — 1440px+

No horizontal scroll, no overlapping elements, no broken flex/grid at any tested width.

---

## 📚 What I Learned

This project was my first time integrating **RTK Query** alongside plain **Redux Toolkit** in the same app. Key takeaways:

- RTK Query removes the need for manual loading/error state management
- Splitting server state (API data) from client state (cart) keeps the app predictable and easier to debug
- Deriving totals via a selector — instead of storing a separate `total` field — avoids state going out of sync