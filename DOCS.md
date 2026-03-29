# MedsFinder Frontend Documentation

This project was developed as a modern, responsive, and secure web application designed to facilitate the process of finding medicines from nearby pharmacies. It serves as a comprehensive case study in full-stack integration, implementing advanced frontend patterns, secure authentication, and cloud-based asset management.

---

## Technology Stack and Core Packages

The application leverages a modern React ecosystem for performance, accessibility, and scalability.

| Package | Purpose | Use Case |
| :--- | :--- | :--- |
| **React 19** | UI Library | Core component-based architecture and state management. |
| **Vite** | Build Tool | Development environment and optimized production builds. |
| **Tailwind CSS v4** | Styling | Centralized semantic design system and responsive layout. |
| **React Router (v7)** | Routing | Client-side navigation across multiple application views. |
| **Browser-image-compression** | Optimization | Client-side image optimization and format conversion (WebP). |
| **Axios** | API Client | Standardized HTTP requests with authorization interceptors. |
| **React-icons** | Iconography | Unified icon sets for UI consistency (Lucide, FontAwesome). |
| **@react-oauth/google** | Authentication | Managed Google OAuth 2.0 integration for secure identity provider access. |
| **React-toastify** | Notifications | User feedback management for system state changes. |
| **jwt-decode** | JWT Utility | Client-side token payload parsing for role-based UI logic. |
| **Headless UI** | Accessible UI | Unstyled, accessible components for complex interactive patterns. |

---

## Directory Structure

The project follows a split architecture to separate the public-facing application from the internal management dashboard.

```bash
frontend/
├── src/
│   ├── admin/             # Dashboard and management logic.
│   │   ├── components/    # Reusable dashboard elements (AdProductCard, etc.).
│   │   └── pages/         # High-level management views.
│   ├── user/              # Public-facing application views.
│   │   ├── components/    # Reusable user section elements.
│   │   └── pages/         # User interface views (ProfilePage, SearchPage).
│   ├── services/          # API layer and specialized utilities.
│   │   ├── allAPI.js      # Unified API request map.
│   │   ├── imagePath.js   # Cloudinary-aware asset path resolver.
│   │   ├── imageCompression.js # Client-side image optimization logic.
│   │   └── serverURL.js   # Backend endpoint configuration.
│   ├── App.jsx            # Routing and application entry.
│   ├── main.jsx           # Global providers and root rendering.
│   └── index.css          # Semantic design system tokens and Tailwind v4 config.
└── .env                   # Environment-specific configuration.
```

---

## Image Optimization Workflow

MedsFinder implements a sophisticated image management system to ensure high performance and persistence.

### 1. **Client-Side Compression (`imageCompression.js`)**
Before any image is uploaded to the server, it is processed locally in the browser:
- **Profile Avatars**: Automatically compressed to a **30KB** target size.
- **Medicines & Products**: Automatically compressed to a **150KB** target size.
- **Format Conversion**: All assets are converted to the efficient **WebP** format to reduce bandwidth consumption.

### 2. **Cloudinary-Aware Rendering (`imagePath.js`)**
The `getImagePath` utility automatically detects the source of an image:
- **CDN URLs**: Renders directly from Cloudinary using the stored HTTPS path.
- **Legacy Filenames**: Automatically prepends the legacy server path for backward compatibility.
- **External URLs**: Supports Google OAuth profile pictures without modification.

---

## Public Application Views (User Section)

### 1. HomePage (`HomePage.jsx`)
The landing page featuring a centralized search interface and location filtering. It implements query parameter management and dynamic navigation logic.

### 2. ProductsPage (`ProductsPage.jsx`)
A global catalog view allowing users to discover personal care & hygiene products. It provides search and filter mechanisms to handle large datasets efficiently.

### 3. SearchPage (`SearchPage.jsx`)
Targeted pharmacy results based on medicine availability. It correlates medicine stock levels with geographic locations for precise search results.

### 4. ProductDetailsPage (`ProductDetailsPage.jsx`)
Comprehensive data view for single medicine entities, including descriptive metadata, pricing, and persistent storage features.

### 5. SavedPage (`SavedPage.jsx`)
A personalized dashboard providing access to user-specific bookmarks, including saved medicines and managed pharmacy lists.

### 6. ProfilePage (`ProfilePage.jsx`)
Protected view for user account management. It enables updates to identity attributes, profile imagery, and geographic preferences via authenticated API calls.

---

## Management Dashboard (Admin Section)

The Admin section provides specialized interfaces for system administrators, editors, and assistants to manage the application's global state.

### 1. AdminDashboard (`AdminDashboard.jsx`)
The central management view featuring high-level analytics and status cards via `TotalCards` and `OverviewCard` components.

### 2. AdminMedicines (`AdminMedicines.jsx`)
Interface for managing the global medicine database. It integrates specialized forms (`AddMedicineForm`) for inventory entry.

### 3. AdminPharmacies (`AdminPharmacies.jsx`)
Dashboard for pharmacy partnership management. It handles pharmacy registration and operational metadata updates via `AddPharmacyForm`.

### 4. AdminAdvertisement (`AdminAdvertisement.jsx`)
Specialized view for managing marketing and product advertisement placements across the platform.

### 5. AdminSettings (`AdminSettings.jsx`)
Global platform configuration view, allowing administrators to manage system-level preferences and role-based access control.

---

## Component Architecture

The application utilizes a hierarchical component model to promote code reusability across both the User and Admin sections:

### User Components
- **Header (`Header.jsx`)**: Responsive navigation adapting to the user's authentication and authorization state.
- **MedicineCard (`MedicineCard.jsx`)**: Data card for medicine entities with bookmarking lifecycle management.
- **PharmacyCard (`PharmacyCard.jsx`)**: Specialized card for search results with rating and maps integration.
- **Login Modal (`Login.jsx`)**: Centralized authentication modal supporting Email/Password and third-party identity providers.
- **Header (`Header.jsx`)**: Dynamically displays the user's Cloudinary avatar or Google profile picture.
- **MedicineCard (`MedicineCard.jsx`)**: Data card with path-agnostic image rendering for cloud assets.

### Admin Components
- **Sidebar (`Sidebar.jsx`)**: Navigation controller for dashboard-related views.
- **Header (`Header.jsx`)**: Specialized dashboard header for management context.
- **Management Forms**: Dedicated forms for data entry (`AddMedicineForm`, `AddPharmacyForm`, `AddProductForm`, `EditProductForm`).


---

## Design System

The application implements a semantic-first design system using Tailwind CSS v4 features:

- **Typography**: Hierarchical scaling for headings and content managed at the base layer.
- **Buttons**: Centralized UI utilities (`.btn-primary`, `.btn-brand`, `.btn-outline`) in `index.css` for consistent interaction.
- **Tokens**: Abstracted color tokens to support system-wide consistency across both themes and sectors.

---

## Security Hardening

To ensure data integrity and user protection, several security protocols were implemented:

1. **Backend Verification**: Google authentication tokens are verified on the server-side to prevent identity spoofing.
2. **Password Hashing**: Traditional credentials are salted and hashed using `bcrypt` protocols before database storage.
3. **JWT Lifecycle**: Authentication tokens are configured with a 24-hour expiration to mitigate session hijacking risks.
4. **CORS Restriction**: The backend API is restricted to authorized origins, preventing unauthorized cross-origin access.
5. **Cloud Persistence**: Using Cloudinary ensures images are not lost during ephemeral deployment cycles (e.g., Render/Vercel).
6. **Format Validation**: Strict validation for JPG, JPEG, PNG, and WebP is enforced at both the UI and API layers.

---

This documentation provides an architectural overview of the MedsFinder frontend and serves as a technical reference for its development lifecycle.
