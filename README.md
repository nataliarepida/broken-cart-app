# RapidCart - Mini E-commerce Site

> ⚠️ **Important Notice**: This project was created as part of a technical interview exercise and **intentionally contains various issues, anti-patterns, and suboptimal implementations**. It should NOT be used as a reference for best practices or production-ready code. The issues are deliberately included as part of the exercise to demonstrate problem-solving and debugging skills.

A modern, responsive e-commerce application built with Next.js 15, TypeScript, and styled-components.

## 🚀 Features

### Core Functionality

- **Product Listing Page (PLP)**: Browse all products with a clean, responsive grid layout
- **Product Details Page**: View detailed product information and reviews
- **Shopping Cart**: Add, remove, and manage items with persistent storage
- **Filtering & Sorting**: Filter by category and sort by price or name
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### Technical Features

- **Next.js 15 Pages Router**: Server-side rendering and client-side navigation
- **TypeScript**: Full type safety throughout the application
- **Styled Components v6**: CSS-in-JS with theme support and responsive design
- **Local Storage**: Cart persistence across browser sessions
- **API Routes**: Built-in API endpoints for products and reviews
- **React 19**: Latest React features and improvements

## 🛠 Tech Stack

- **Framework**: Next.js 15.3.2
- **Language**: TypeScript 5
- **Styling**: Styled Components 6.1.19
- **State Management**: React Context API and Hooks
- **UI Framework**: Custom components with TailwindCSS support
- **Linting**: ESLint 8.56.0

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── header/        # Header components
│   ├── cart/              # Cart-related components
│   │   ├── CartIcon/
│   │   ├── CartItem/
│   │   └── CartSummary/
│   └── products/          # Product-related components
│       ├── ProductCard/
│       ├── ProductDetails/
│       ├── ProductGrid/
│       ├── ProductFilters/
│       ├── ProductSort/
│       └── ReviewList/
├── contexts/
│   └── CartContext.tsx    # Cart state management
├── hooks/
│   └── useProducts.ts     # Product data management
├── lib/
│   ├── api/              # API utilities
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx         # Product listing page
│   ├── cart.tsx          # Shopping cart page
│   ├── products/         # Product pages
│   └── api/              # API routes
├── styles/
│   ├── GlobalStyles.ts
│   └── theme.ts
└── types/
    └── styled.d.ts       # Styled-components types
```

## 🎨 Design System

The application uses a comprehensive design system with:

- **Color Palette**: Primary, secondary, and semantic colors
- **Typography**: Modern font stack with consistent sizing
- **Spacing**: Consistent spacing system
- **Components**: Reusable UI components with variants
- **Responsive Design**: Mobile-first approach with breakpoints

## 🔧 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone and navigate to the project**:

   ```bash
   cd rapidcart
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Pages & Features

### Product Listing Page (`/`)

- Responsive product grid layout
- Category filtering
- Price and name sorting
- Loading and empty states

### Product Details Page (`/products/[id]`)

- Detailed product information
- Product reviews
- Add to cart functionality
- Related products

### Shopping Cart Page (`/cart`)

- Cart item management
- Quantity controls
- Order summary with calculations
- Empty cart state

### API Routes

- `/api/products` - Get all products
- `/api/products/[id]` - Get single product
- `/api/products/categories` - Get product categories
- `/api/products/[id]/reviews` - Get product reviews

## 🛒 Cart Functionality

### Features

- Add/remove products
- Update quantities
- Clear cart
- Persistent storage
- Real-time total calculations

### Calculations

- Subtotal calculation
- Shipping cost rules
- Tax calculation
- Total order amount

## 🔮 Future Enhancements

### Planned Features

- User authentication
- Search functionality
- Wishlist
- Checkout process
- Order history
- Product reviews
- Real-time inventory

### Technical Roadmap

- Unit and integration tests
- Performance optimizations
- Enhanced accessibility
- SEO improvements
- API integration
- Database implementation

## 📄 License

This project is created as part of a technical interview exercise. It contains intentional issues and anti-patterns that were part of the exercise requirements. While the implementation demonstrates various technical concepts, it should not be used as a reference for production code or best practices.

### Known Anti-patterns and Issues

This project intentionally includes:

- Suboptimal state management approaches
- Non-standard component structures
- Inconsistent error handling
- Mixed styling methodologies
- Incomplete type definitions
- Performance bottlenecks
- Accessibility issues

These issues were deliberately included as part of the interview exercise to showcase debugging and problem-solving skills.
