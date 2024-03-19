import { defineConfig } from 'astro/config';

export default defineConfig({
  // Configurazione per gestire i dati del CMS
  data: {
    // Metodo per recuperare i dati dei progetti dal CMS
    async projects() {
      // Esempio: simuliamo una richiesta HTTP per recuperare i dati dal CMS
      const response = await fetch('https://paulinho.pages.dev/admin/#/collections/projects');
      const data = await response.json();
      
      // Restituisci i dati ottenuti dal CMS
      return data;
    }
  }
});
