# MedsFinder - Modern Pharmacy & Medicine Locator

MedsFinder is a professional, full-stack web application designed to help users quickly find medicine availability in nearby pharmacies. Built with a focus on speed, security, and cloud-native asset management, it provides a seamless experience for both customers and administrators.

---

## Key Features

*   **Smart Medicine Search**: Real-time search by medicine name, correlated with live pharmacy stock levels and locations.
*   **Role-Based Dashboard**: Comprehensive management interface for Admins, Editors, and Assistants to oversee inventory and partnerships.
*   **Cloud-Native Assets**: Integrated with Cloudinary CDN for persistent and high-speed delivery of medicine and profile imagery.
*   **Client-Side Optimization**: Automated WebP conversion and image compression (30KB profiles/150KB products) to minimize payload and maximize speed.
*   **Advanced Security**: 
    *   Secure Google OAuth 2.0 identity provider integration.
    *   Bcrypt salted password hashing for traditional accounts.
    *   Tiered Rate Limiting to prevent DDoS and automated scraping.
    *   Environment-aware CORS policies for production origin hardening.

---

## Technology Stack

| Area | Technologies |
| :--- | :--- |
| **Frontend** | React 19, Vite, Tailwind CSS v4, @react-oauth/google |
| **Backend** | Node.js, Express, MongoDB (Mongoose), JWT |
| **Optimization** | Browser-image-compression, Cloudinary SDK |
| **Icons** | React Icons (FontAwesome, Lucide, Remix) |
| **Deployment** | Vercel (Frontend), Render/Railway (Backend) |

---

## Project Architecture

```bash
frontend/
├── src/
│   ├── admin/             # Restricted dashboard logic and pages.
│   ├── user/              # Public-facing pharmacy and medicine views.
│   ├── services/          # API layer, Cloudinary pathing, and compression utilities.
│   ├── components/        # Reusable UI elements (Headers, Modals, Cards).
│   └── index.css          # Semantic design system tokens and Tailwind v4 config.
```

---

## Getting Started

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/sayeedmunees/medsfinder.git
    cd medsfinder/frontend
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Environment**:
    Create a `.env` file in the root directory:
    ```env
    VITE_BACKEND_URL=your_backend_api_url
    VITE_GOOGLE_CLIENT_ID=your_google_oauth_id
    ```

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```

---

## Security & Performance

To protect user data and ensure lightning-fast performance, every image is pre-optimized in the browser before reaching the cloud. The platform also implements strict CORS matching to ensure that only authorized origins can communicate with the sensitive pharmacy database.

---

## License & Documentation

For a deep dive into the backend architecture and API endpoints, please refer to the [Backend Documentation](https://github.com/sayeedmunees/medsfinder/tree/main/backend/DOCS.md).

Developed as a showcase in modern React full-stack engineering. 
