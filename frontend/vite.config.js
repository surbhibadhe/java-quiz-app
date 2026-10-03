import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/question": {
                target: "https://quiz-app-6iuy.onrender.com",
                changeOrigin: true,
            },
            "/quiz": {
                target: "https://quiz-app-6iuy.onrender.com",
                changeOrigin: true,
            },
        },
    },
});