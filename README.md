# Paradise Nursery Shopping Application

A dynamic ReactJS web application for an online plant shop. Browse plants by category, add them to your cart, and manage quantities before checkout.

## Features

- **Landing Page** — Welcome screen with company info and a "Get Started" button
- **Product Listing** — 3 plant categories with 6 plants each (18 total)
- **Shopping Cart** — Add/remove items, adjust quantities, view totals
- **Redux State** — Cart managed via `CartSlice.jsx`

## Tech Stack

- React 18
- React Router v6
- Redux Toolkit
- Vite

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/
│   ├── AboutUs.jsx       # Company information on landing page
│   ├── Navbar.jsx        # Navigation bar with cart badge
│   ├── ProductList.jsx   # Product listing with categories
│   ├── CartItem.jsx      # Individual cart row with +/- and delete
│   └── CartPage.jsx      # Shopping cart page
├── store/
│   ├── CartSlice.jsx     # Redux slice for cart state
│   └── store.js          # Redux store configuration
├── pages/
│   └── LandingPage.jsx   # Landing / home page
├── data/
│   └── plants.js         # Plant catalog data
├── App.jsx
└── main.jsx
```

## Pages

| Route     | Description                          |
|-----------|--------------------------------------|
| `/`       | Landing page with Get Started button   |
| `/plants` | Product listing with Add to Cart     |
| `/cart`   | Shopping cart with quantity controls |

## Author

Somesh Shakya

## Repository

[https://github.com/Someshshakya/e-plantShopping](https://github.com/Someshshakya/e-plantShopping)
