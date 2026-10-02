import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Requests to /question and /quiz go to Spring Boot, so no CORS setup is needed.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/question": "http://localhost:8080",
      "/quiz": "http://localhost:8080",
    },
  },
});
