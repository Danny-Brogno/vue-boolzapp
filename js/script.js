
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
            avatar: '_1',
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
            avatar: '_2',
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
                    text: "Ho già comprato due biglietti per l'Egitto"
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Ottaviano',
            avatar: '_3',
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
            avatar: '_4',
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
