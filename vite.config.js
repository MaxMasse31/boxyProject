import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Configuration de Vite
export default defineConfig({
  // Liste des plugins utilisés avec Vite, dans ce cas, le plugin 'react'
  plugins: [react()],
})
