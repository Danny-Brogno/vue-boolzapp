
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
      "url": "img/legionario.png",
      "defaultImg": "img/default-background.png",
      contacts: [
        {
            name: 'Cesare',
            avatar: 'img/giulio.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Ho comprato un coltello nuovo a Bruto',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Non mi pare una buoan idea',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Vai tranquillo, lui non mi tradirebbe mai',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Marco Antonio',
            avatar: 'img/marco.jpg',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    text: 'Cleopatra ha fatto un nuovo video su TicToc!',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Antò, non fare scemenze',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:35:00',
                    text: "Ho già comprato due biglietti per l'Egitto",
                    status: 'received'
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
                    text: "Tutte le strade portano a Roma",
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: "Anche dall'America",
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    text: 'Dammi un po di tempo. Porterò le legioni anche li',
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
                    text: 'Indovina? Mi sto facendo il bagno nel latte',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Io non ho sale per fare un uovo fritto e tu ti fai il bagno nel latte?',
                    status: 'sent'
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
                  text: 'Ti ho prearato un piatto di funghi',
                  status: 'received'
              },
              {
                  date: '11/11/2020 17:23:00',
                  text: 'Non è la cosa più strana che ho sentito oggi',
                  status: 'sent'
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
                    text: "Vieni anche tu al ROMAN-GAY-PRIDE?",
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
                    text: "Anvedi stò burino",
                    status: 'received'
                },
                {
                    date: '07/08/2020 20:21:10',
                    text: '???',
                    status: 'sent'
                },
                {
                    date: '07/08/2020 20:22:22',
                    text: 'Feste festini UAU UAU!!!!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Spartaco',
            avatar: 'img/spartacus.jpg',
            visible: true,
            messages: [
                {
                    date: '05/06/2020 23:57:40',
                    text: "Mi sento trattato come uno schiavo",
                    status: 'received'
                },
                {
                    date: '05/06/2020 23:58:10',
                    text: 'Forse perchè lo sei',
                    status: 'sent'
                },
                {
                    date: '05/06/2020 23:59:22',
                    text: 'Un giorno sarò libero',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Annibale',
            avatar: 'img/annibale.jpg',
            visible: true,
            messages: [
                {
                    date: '23/04/2020 12:44:40',
                    text: "Mi serve un po di sale",
                    status: 'received'
                },
                {
                    date: '23/04/2020 12:45:10',
                    text: 'Basta che vai a Cartagine',
                    status: 'sent'
                },
                {
                    date: '23/04/2020 12:56:22',
                    text: 'touchè',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Mario',
            avatar: 'img/mario.jpg',
            visible: true,
            messages: [
                {
                    date: '23/04/2020 12:44:40',
                    text: "Hai visto mio fratello Luigi?",
                    status: 'received'
                },
                {
                    date: '23/04/2020 12:45:10',
                    text: 'Non capisco la battuta',
                    status: 'sent'
                },
                {
                    date: '23/04/2020 12:56:22',
                    text: 'Sei antico',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Cleopatra VII',
            avatar: 'img/cleopatra.jpg',
            visible: true,
            messages: [
                {
                    date: '23/04/2020 12:44:40',
                    text: "Fa troppo caldo. Me ne vado in Norvegia",
                    status: 'received'
                },
                {
                    date: '23/04/2020 12:45:10',
                    text: 'Quanto ci vuole col battello?',
                    status: 'sent'
                },
                {
                    date: '23/04/2020 12:56:22',
                    text: 'Un paio di mesi',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Agrippa',
            avatar: 'img/agrippa.png',
            visible: true,
            messages: [
                {
                    date: '23/04/2020 12:44:40',
                    text: "Non so cosa dire",
                    status: 'received'
                },
                {
                    date: '23/04/2020 12:45:10',
                    text: 'Potevi non scrivere affatto',
                    status: 'sent'
                },
                {
                    date: '23/04/2020 12:56:22',
                    text: 'Ma anche no',
                    status: 'received'
                }
            ],
        }
    ]
    }, // END OF DATA


    methods: {

      movingContact: function () {
        console.log("LALLERO")
      }

    } // END OF METHODS

  }); // END OF FUNCTION vueFunction

} // END OF vueFunction

// -----------------------------------------------------------------------------

function init () {
  vueFunction();
}

document.addEventListener("DOMContentLoaded", init);
// -----------------------------------------------------------------------------
