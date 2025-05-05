# Memoria Técnica del Proyecto

## 1. Inicio del Proyecto
- Inicializado con `npm create vite@latest curriculum-vitae -- --template react`
- Framework: React + TailwindCSS
- Instalación de dependencias:
- npm install tailwindcss @tailwindcss/vite
- npm install i18next react-i18next i18next-browser-languagedetector

## 2. Estructura del Proyecto
- `/src/components`: componentes reutilizables


## 3. Configuración
- TailwindCSS configurado en `tailwind.config.js`
- Archivo `vite.config.js` modificado para habilitar tailwind
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import tailwindcss from '@tailwindcss/vite'

    // https://vite.dev/config/
    export default defineConfig({
    plugins: [react(), tailwindcss()],
    })


## 4. Versiones importantes
- 2025-04-25: Configuración de internacionalización con `react-i18next`
- 2025-04-28: Despliegue inicial en Vercel

## 5. Problemas y soluciones
- ❌ Problema con rutas en Vercel → ✅ Solución: agregar `_redirects` para SPA