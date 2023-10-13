export default {
  // Les fichiers à inclure lors de la génération de votre fichier CSS
  content: [
    "./index.html", // Fichier HTML principal de votre application
    "./src/**/*.{js,ts,jsx,tsx}", // Fichiers JavaScript et TypeScript dans le répertoire src
  ],

  // Les paramètres de personnalisation de votre thème Tailwind CSS
  theme: {
    extend: {}, // Vous pouvez étendre et personnaliser votre thème ici
  },

  // Les plugins que vous souhaitez utiliser avec Tailwind CSS
  plugins: [], // Vous pouvez ajouter des plugins personnalisés ici
};
