import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

export default defineConfig(({ command }) => ({
  // GitHub Pages serve o site em /Git-Miner/, então só o build usa esse prefixo.
  base: command === "build" ? "/Git-Miner/" : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  server: {
    host: "0.0.0.0",
    // O preview do Claude atribui a porta via PORT; sem ela, volta para 3000.
    port: Number(process.env.PORT) || 3000,
    strictPort: true,
  },
}));
