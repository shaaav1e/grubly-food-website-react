import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";
import viteImagemin from "vite-plugin-imagemin";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools(),
    tailwindcss(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      mozjpeg: {
        quality: 75, // Optimize JPEG images
      },
      optipng: {
        optimizationLevel: 7, // Optimize PNG images
      },
      webp: {
        quality: 75, // Optimize WebP images
      },
    }),
  ],
  build: {
    // Minification options
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          // Add more chunk splits as needed
        },
      },
    },
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 1000,
    // Generate sourcemaps for production
    sourcemap: false,
    // CSS code splitting
    cssCodeSplit: true,
    // Asset optimization
    assetsInlineLimit: 4096,
  },
});
