/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, 
presa anch’essa inserendo il percoso in una propietá dell'oggetto
 restituito dalla funzione data. */

const { createApp } = Vue;

createApp({
  data() {
    return {
      text: "Primo esercizio con veu.js",
      img: "https://picsum.photos/id/237/200/300",
    };
  },
}).mount("#app");
