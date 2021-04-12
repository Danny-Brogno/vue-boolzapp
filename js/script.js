
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
      "currentChat": "",
      "showImage": true,
      "currentMessages": "",
      "addTextIntoArray": "",
      // "cutText": "",

      defaultMessage:{},
      objUser: {},
      contacts: [
        {
            name: 'Cesare',
            avatar: 'img/giulio.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Ho comprato dei coltelli nuovi a Bruto',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:50:00',
                    myText: 'Non mi pare una buona idea',
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
                    myText: 'Antò, non fare scemenze',
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
                    myText: "Anche dall'America?",
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
                    myText: 'Io non ho sale per fare un uovo fritto e tu ti fai il bagno nel latte?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:51:00',
                    text: 'Non è colpa mia se tu sei un poveraccio',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:52:00',
                    myText: 'Ma taci che non hai mai lavorato un minuto in vita tua',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:53:00',
                    text: 'Io non ho bisogno di lavorare: sono una influencer',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:54:00',
                    myText: 'A quale università hai studiato per diventare influencer?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:55:00',
                    text: 'La laurea non serve a niente: non vedi quanti laureati stanno a spasso?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:56:00',
                    myText: 'Non puoi dire sul serio',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:57:00',
                    text: 'Perchè?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:58:00',
                    myText: "Ok, mettiamola così: quale talento è necessario per poter fare l'influencer?",
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:59:00',
                    text: 'Bisogna avere un sacco di seguaci',
                    status: 'received'
                },
                {
                    date: '10/01/2020 16:00:00',
                    myText: 'Appunto',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:01:00',
                    text: 'Vabbè, capirai... Tu fai il medico. Che talenti hai?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 16:02:00',
                    myText: 'In confronto a te? Nessuno XD',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:03:00',
                    text: 'Bravo, perchè non sarai mai utile come me.',
                    status: 'received'
                },
                {
                    date: '10/01/2020 16:04:00',
                    myText: 'Hai ragione, in fin dei conti io salvo vite... Poca roba',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:05:00',
                    text: 'Anche io salvo vite. Una volta un signore di 80 anni mi ha ringraziato dicendomi "Lucrezia, le tue foto mi fanno sentire un sedicenne"',
                    status: 'received'
                },
                {
                    date: '10/01/2020 16:06:00',
                    myText: "Meglio di Batman",
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:07:00',
                    text: 'Chi è un politico? Non lo conosco',
                    status: 'received'
                },
                {
                    date: '10/01/2020 16:08:00',
                    myText: 'No, è il nuovo Papa',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:09:00',
                    text: 'Io sono atea, non mi piace che qualcuno mi dica in cosa devo credere',
                    status: 'received'
                },
                {
                    date: '10/01/2020 16:10:00',
                    myText: 'Vorrei poter pensare che tu abbia dei pensieri tuoi che non siano indotti da Instagram o Facebook',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:11:00',
                    text: 'In che senzo?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 16:12:00',
                    myText: 'Mettiamola così: se tu non fossi influencer quale altra professione faresti?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:13:00',
                    text: 'Attrice',
                    status: 'received'
                },
                {
                    date: '10/01/2020 16:14:00',
                    myText: 'Ma se non hai mai letto un libro',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:00',
                    text: "Io sono un'attrice, mica una lettrice",
                    status: 'received'
                },


            ],
        },
        {
          name: 'Agrippina',
          avatar: 'img/agrippina.jpg',
          visible: true,
          messages: [
              {
                  date: '11/11/2020 17:22:55',
                  text: 'Sto facendo uan raccolta fondi per la mia nuova associazione "Potere alle donne romane", ogni membro deve versare la quota di dieci denari per la causa',
                  status: 'received'
              },
              {
                  date: '11/11/2020 17:23:00',
                  myText: 'Potere alle donne romane?',
                  status: 'sent'
              },
              {
                  date: '11/11/2020 17:24:55',
                  text: 'Sapevo tu fossi un maschilista patriarca che odia il genere femminile. Per te le donne servono solo per fare figli e pulire casa vero? Mi fai schifo',
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
                    text: "Vieni anche tu al ROMAN-GAY-PRIDE?",
                    status: 'received'
                },
                {
                    date: '04/09/2020 10:11:10',
                    myText: 'Gaio... Ti ho già detto che sono etero',
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
                    myText: 'Non parlo romano',
                    status: 'sent'
                },
                {
                    date: '07/08/2020 20:22:22',
                    text: "A' ragazzì, se tè piglio tè faccio dì l'ave Maria ar contrario più veloce de come o' dici ara diritta",
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
                    myText: 'Forse perchè lo sei',
                    status: 'sent'
                },
                {
                    date: '05/06/2020 23:59:22',
                    text: 'A si? bhe tu sei brutto e stupido',
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
                    myText: 'Basta che vai a Cartagine',
                    status: 'sent'
                },
                {
                    date: '23/04/2020 12:56:22',
                    text: 'Touchè',
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
                    myText: 'Non capisco la battuta',
                    status: 'sent'
                },
                {
                    date: '23/04/2020 12:56:22',
                    text: 'TU non capisci noi CIOVANI',
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
                    myText: 'Quanto ci vuole col battello?',
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
                    myText: 'Potevi non scrivere affatto',
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
  }, // END OF DATA-------------------------------------------------------------


    methods: {

      movingContact: function (elem, index) {
        // MOVING CONTACT TOP RIGHT ON CLICK
        this.currentChat = elem,
        // this.currentAvatar = elem.avatar,
        // MESSAGES APPEAR ON CLICK
        this.currentMessages = elem.messages,
        // HIDING DEFAULT IMAGE (MIDDLE SECTION) ON CLICK
        this.showImage = !this.defaultImg
        // ADDING TEXT FROM INPUT TO ARRAY (PRINTED IN PAGE)

      }, // END OF MOVING CONTACTS FUNCTION (IN METHODS)------------------------


      sendMessage: function() {

        this.objUser = {
          data: new Date(),
          myText: this.addTextIntoArray,
          status: "sent",
        }

        // IF USER TRIES TO SEND EVEN ONE SINGLE LETTER
        if (this.addTextIntoArray.length > 0) {

          // THEN IT CAN GO INTO THE ARRAY (LINE 427 OF JS)
          this.currentMessages.push(this.objUser);
          // AND WE HAVE A DEFALUT ANSWER THAT COMES AFTER 3 SECONDS

          this.defaultMessage = setTimeout(() => {
            // (THIS IS THE DEFAULT ANSWER)
            this.defaultMessage = {
              date: new Date(),
              text: "Va bene",
              status: "received"
            }
            this.currentMessages.push(this.defaultMessage); // (PUSHED INTO THE ARRAY)
          }, 3000)

          // THIS MAKES THE TEXT GO AWAY ONCE YOU "SEND" IT IN THE ARRAY
          this.addTextIntoArray = "";

        // BUT IF USER TRIES TO SEND NO WORDS/LETTERS AT ALL, THEN:
        } else {
          console.log("WRITE SOMETHING");
        }

      } // END OF sendMessage FUNCTION (IN METHODS)-----------------------------

      // cutText: function (text, length, suffix) {
      //     if (text.length > length) {
      //         return text.substring(0, length) + suffix;
      //     } else {
      //         return text;
      //     }
      // };

    }, // END OF METHODS--------------------------------------------------------

    // // computed: {
    //
	  //   sortedArray: function() {
		//     let sortedContacts = this.contacts;
    //
		//     sortedContacts = sortedContacts.sort((a,b) => {
		// 	    let fa = a.names.toLowerCase();
    //       let fb = b.names.toLowerCase();
		// 	    if (fa < fb) {
		// 		    return - 1;
		// 	      } else if (fa > fb) {
		// 		      return 1;
		// 	      }
		// 	      return 0;
		//     })
    //     console.log(sortedContacts);
	  //   } // END OF sortedArray FUNCTION (IN COMPUTED)
    //
    // } // END OF COMPUTED--------------------------------------------------------

  }); // END OF vueFunction

} // END OF VUE

// -----------------------------------------------------------------------------

function init () {
  vueFunction();
}

document.addEventListener("DOMContentLoaded", init);
// -----------------------------------------------------------------------------
