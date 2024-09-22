# The Modular Website

This project provides a modular setup using React, Vite, and TailwindCSS to build scalable and reusable components for various business functionalities. The repository is designed to serve as a foundational framework for websites that require various microservices, such as authentication, e-commerce, booking systems, content management, and more.

## Tech Stack

- **React**: For building dynamic and responsive user interfaces.
- **Vite**: For fast and optimized development environment setup.
- **TailwindCSS**: For utility-first CSS styling with minimal effort.

## Available Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) - Uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) - Uses [SWC](https://swc.rs/) for Fast Refresh.

---

## Frontend Components and Pages

### **Core Pages**

1. **Landing Page**
   - Hero Section (Title, Subtitle, Call to Action)
   - Features Section (List of Benefits, Icons, Descriptions)
   - Testimonials Section
   - Pricing Section
   - FAQ Section
   - Footer (Links, Social Media, Contact Info)

2. **Authentication Pages**
   - Login Page (Email, Password, Forgot Password)
   - Register Page (Form with Input Fields, Terms and Conditions Checkbox)
   - Password Reset Page (Input Fields, Submit Button)
   - Account Activation Page (Activation Messages, Redirect Links)

3. **Dashboard**
   - Overview Panel (Key Metrics, Graphs)
   - Recent Activity
   - Notifications
   - Quick Links to Other Pages

4. **User Profile Page**
   - Profile Details Section (Avatar, Name, Email, Edit Button)
   - Security Settings (Change Password, Two-Factor Authentication Setup)
   - Preferences (Language, Notifications)

5. **Product Pages (for E-commerce)**
   - Product Listing Page (Filters, Sorting, Grid/List View)
   - Product Detail Page (Images, Description, Pricing, Add to Cart Button)
   - Cart Page (Cart Items, Quantity Adjuster, Checkout Button)

6. **Checkout Pages**
   - Shipping Information (Address Form, Delivery Options)
   - Payment Information (Credit Card Form, Payment Gateway Integration)
   - Order Summary (Products, Prices, Taxes, Total Amount)
   - Confirmation Page (Order Details, Download Receipt Option)

7. **Booking/Reservation Pages**
   - Booking Listing (Available Timeslots, Calendar View)
   - Booking Detail (Service Details, Booking Form)
   - Confirmation Page (Booking Summary, Edit/Cancel Option)

8. **Content Management Pages (CMS)**
   - Blog Listing Page (Blog Cards, Search Bar, Filters)
   - Blog Detail Page (Content, Author Info, Related Posts)
   - Page Editor (Drag and Drop Components, Live Preview)

9. **Customer Support Pages**
   - Contact Us Page (Form, Contact Details)
   - Help Center (FAQ Accordion, Searchable Knowledge Base)
   - Live Chat Widget

10. **Analytics and Reporting Pages**
    - Dashboard (Graphs, Charts, Data Filters)
    - Sales Reports (Filter by Date, Product, Category)
    - User Analytics (Sessions, User Behavior, Heatmaps)

### **Reusable Components**

- **Navigation Components**
  - Navbar (Links, Dropdowns, Search Bar)
  - Sidebar (Collapsible, Icons, Text)

- **Forms and Input Components**
  - Input Fields (Text, Email, Password, Number, File Upload)
  - Dropdowns, Date Pickers, Time Pickers
  - Multi-step Form Wizard

- **Buttons and Actions**
  - Primary/Secondary Buttons
  - Icon Buttons (Delete, Edit, Save)
  - Toggle Switches, Radio Buttons, Checkboxes

- **Cards and List Components**
  - Info Cards (With Images, Icons, Text)
  - Product Cards (Image, Title, Price)
  - Review Cards (User Avatar, Rating, Comment)

- **Modals and Popups**
  - Generic Modal (Title, Body, Footer Actions)
  - Confirmation Popup (Yes/No Actions)
  - Notifications (Success, Error, Info Toasts)

- **Tables and Data Grids**
  - Simple Table (Sortable Columns, Search)
  - Paginated Data Grid (Filters, Export Options)

- **Media Components**
  - Image Carousel
  - Video Player
  - Audio Player

- **Alerts and Notifications**
  - Banner Alerts (Success, Error, Warning, Info)
  - Toast Notifications

- **Loading and Progress Indicators**
  - Spinners, Skeleton Loaders
  - Progress Bars (File Uploads, Loading States)

- **Search Components**
  - Search Bar (Autocomplete, Suggestions)
  - Filter Panel (Price, Categories, Tags)

### **Utility Pages**

- 404 Not Found Page
- Maintenance Mode Page
- Terms and Conditions, Privacy Policy Pages
- Subscription Management (Upgrade, Downgrade Plans)

---

## File Structure

Here's an overview of the project's file structure:


[file-structre(1)]
![file-structre(1)](https://github.com/user-attachments/assets/22aa7ca8-037e-4bd9-a3ef-3c30bdf7bf68)

[file-structre(2)]
![file-structre(2)](https://github.com/user-attachments/assets/98f3a65e-a850-45d5-bc30-c38ba458f467)

[file-structre(2)]
![file-structre(3)](https://github.com/user-attachments/assets/335200b6-5549-44e8-92e8-79f36b1471ff)



## Key Structure Notes

- **`/components`**: Contains reusable components categorized by their functionality (e.g., `auth`, `common`, `layout`). This modularity helps keep the code organized and reusable.
- **`/pages`**: Pages are further organized into subfolders representing each major feature, making it easier to manage and navigate between different parts of the project.
- **`/content`**: Separate content files allow you to manage texts, images, and other media independently from the UI logic, enhancing maintainability and localization.
- **`/hooks`**: Custom hooks are placed here, enabling clean and reusable logic management across the application.
- **`/styles`**: TailwindCSS setup and custom styles are kept here, with Tailwind configured to scan all relevant files for classes.

---


![FileStructure-info](https://github.com/user-attachments/assets/edd7ab1f-418a-40df-849c-e3cb7b08ac52)

