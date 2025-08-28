# Ticketing System Frontend

A modern Helpdesk/Ticketing System frontend built with Vue 3, Vite, Pinia, and TailwindCSS. This project is inspired by and follows the course:  
[TickTrack: Ticketing System Dengan Laravel 12 dan Vue Js](https://buildwithangga.com/kelas/ticktrack-ticketing-system-dengan-laravel-12-dan-vue-js?main_leads=browseKelas)

## Features

- User authentication (login, register, logout)
- User and admin dashboards
- Ticket management (create, view, reply, filter)
- Statistics and charts for admin
- Responsive UI with TailwindCSS

## Project Structure

```
src/
  components/      # UI components (Navbar, Sidebar, etc.)
  helpers/         # Helper functions (error handling, etc.)
  layouts/         # Main layouts (App, Admin, Auth)
  plugins/         # External plugins (axios)
  router/          # Routing configuration
  stores/          # State management (Pinia)
  views/           # Main application pages
```

## Getting Started

1. Clone this repository
2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Build for production:

   ```sh
   npm run build
   ```

## API Configuration

- Change the API base URL in [`src/plugins/axios.js`](src/plugins/axios.js) if needed.

## Tech Stack

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [Chart.js](https://www.chartjs.org/)
- [Feather Icons](https://feathericons.com/)
- [Luxon](https://moment.github.io/luxon/)