
function numberGenerator(min, max) {
  let localMin = min;
  let localMax = max - min + 1;
  return Math.floor(Math.random() * (localMax - localMin)) + localMin;

} // END OF FUNCTION numberGenerator

// -----------------------------------------------------------------------------

function vueFunction() {

  new Vue({

    el: "#dannyVue",
    data: {
      "url": "img/myProfileImg.png",

      contacts: [
        {
            name: 'Giulio',
            avatar: 'img/giulio.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai visto i miei 23 coltelli?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Credo che Bruto li abbia presi',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Allora sto tranquillo',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Marco',
            avatar: 'img/marco.jpg',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao! Hai visto che Cleopatra ha fatto un uovo video su TicToc?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Antò, non fare scemenze',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    text: "Ho già comprato due biglietti per l'Egitto",
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Ottaviano',
            avatar: 'img/ottaviano.jpg',
            visible: true,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    text: "Quand'è che vieni a Roma?",
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: 'Non conosco molto bene la strada',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    text: 'Tranquillo, tanto tutte le strade portano a Roma',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Lucrezia',
            avatar: 'img/lucrezia.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Ciao! Indovina? Mi sto facendo il bagno nel latte',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Io non ho sale per fare un uovo fritto e tu ti fai il bagno nel latte?',
                    status: 'received'
                }
            ],
        },
        {
          name: 'Agrippina',
          avatar: 'img/agrippina.jpg',
          visible: true,
          messages: [
              {
                  date: '11/11/2020 17:22:55',
                  text: 'AVE. Non è che puoi portarmi un capretto bianco? Vorrei fare un sacrificio di sangue a Giove Capitolino',
                  status: 'sent'
              },
              {
                  date: '11/11/2020 17:23:00',
                  text: 'Non è la cosa più strana che ho sentito oggi',
                  status: 'received'
              }
          ],
        },
        {
            name: 'Gaio',
            avatar: 'img/gaio.jpg',
            visible: true,
            messages: [
                {
                    date: '04/09/2020 10:10:40',
                    text: "Salve mia Venere",
                    status: 'received'
                },
                {
                    date: '04/09/2020 10:11:10',
                    text: 'Gaio... Ti ho già detto che sono etero',
                    status: 'sent'
                },
                {
                    date: '04/09/2020 10:12:22',
                    text: 'Mai una gioia',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Cicerone',
            avatar: 'img/cicerone.jpg',
            visible: true,
            messages: [
                {
                    date: '07/08/2020 20:20:40',
                    text: "Stai pur certo che non sei tu ad essere mortale, ma solo il tuo corpo. Perché ciò che la tua forma esterna rivela agli uomini non è te stesso; lo spirito è la vera essenza di se stessi, non la figura fisica che può essere indicata col tuo dito.",
                    status: 'received'
                },
                {
                    date: '07/08/2020 20:21:10',
                    text: '???',
                    status: 'sent'
                },
                {
                    date: '07/08/2020 20:22:22',
                    text: 'Sei un barbaro ingorante',
                    status: 'received'
                }
            ],
        },
    ]
    }, // END OF DATA

    methods: {

    } // END OF METHODS

  }); // END OF FUNCTION vueFunction

} // END OF vueFunction

// -----------------------------------------------------------------------------

function init () {
  vueFunction();
}

document.addEventListener("DOMContentLoaded", init);
// -----------------------------------------------------------------------------
