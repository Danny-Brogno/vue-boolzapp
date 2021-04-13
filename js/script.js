
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
      "showImage": true,
      "currentChat": "",
      "currentMessages": "",
      "addTextIntoArray": "",
      "searchContacts": "",
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
                    text: 'Non mi pare una buona idea',
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
                    text: "Anche dall'America?",
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
                },
                {
                    date: '10/01/2020 15:51:00',
                    text: 'Non è colpa mia se tu sei un poveraccio',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:52:00',
                    text: 'Ma taci che non hai mai lavorato un minuto in vita tua',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:53:00',
                    text: 'Io non ho bisogno di lavorare: sono una influencer',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:54:00',
                    text: 'A quale università hai studiato per diventare influencer?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:55:00',
                    text: 'La laurea non serve a niente: non vedi quanti laureati stanno a spasso?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:56:00',
                    text: 'Non puoi dire sul serio',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:57:00',
                    text: 'Perchè?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:58:00',
                    text: "Ok, mettiamola così: quale talento è necessario per poter fare l'influencer?",
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:59:00',
                    text: 'Bisogna avere un sacco di seguaci',
                    status: 'received'
                },
                {
                    date: '10/01/2020 16:00:00',
                    text: 'Appunto',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:01:00',
                    text: 'Vabbè, capirai... Tu fai il medico. Che talenti hai?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 16:02:00',
                    text: 'In confronto a te? Nessuno XD',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:03:00',
                    text: 'Bravo, perchè non sarai mai utile come me.',
                    status: 'received'
                },
                {
                    date: '10/01/2020 16:04:00',
                    text: 'Hai ragione, in fin dei conti io salvo vite... Poca roba',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:05:00',
                    text: 'Anche io salvo vite. Una volta un signore di 80 anni mi ha ringraziato dicendomi "Lucrezia, le tue foto mi fanno sentire un sedicenne"',
                    status: 'received'
                },
                {
                    date: '10/01/2020 16:06:00',
                    text: "Meglio di Batman",
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:07:00',
                    text: 'Chi è un politico? Non lo conosco',
                    status: 'received'
                },
                {
                    date: '10/01/2020 16:08:00',
                    text: 'No, è il nuovo Papa',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:09:00',
                    text: 'Io sono atea, non mi piace che qualcuno mi dica in cosa devo credere',
                    status: 'received'
                },
                {
                    date: '10/01/2020 16:10:00',
                    text: 'Vorrei poter pensare che tu abbia dei pensieri tuoi che non siano indotti da Instagram o Facebook',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:11:00',
                    text: 'In che senzo?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 16:12:00',
                    text: 'Mettiamola così: se tu non fossi influencer quale altra professione faresti?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:13:00',
                    text: 'Attrice',
                    status: 'received'
                },
                {
                    date: '10/01/2020 16:14:00',
                    text: 'Ma se non hai mai letto un libro',
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
          name: 'Valeria',
          avatar: 'img/valeria.jpg',
          visible: true,
          messages: [
              {
                  date: '11/11/2020 17:22:55',
                  text: 'Sto facendo uan raccolta fondi per la mia nuova associazione "Potere alle donne romane", ogni membro deve versare la quota di dieci denari per la causa',
                  status: 'received'
              },
              {
                  date: '11/11/2020 17:23:00',
                  text: 'Potere alle donne romane?',
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
                    text: 'Non parlo romano',
                    status: 'sent'
                },
                {
                    date: '07/08/2020 20:22:22',
                    text: "A' ragazzì, se tè piglio tè gonfio",
                    status: 'received'
                },
                {
                    date: '07/08/2020 20:23:10',
                    text: 'Continuo a non capire il tuo linguaggio aulico',
                    status: 'sent'
                },
                {
                    date: '07/08/2020 20:24:22',
                    text: "OMNIVM MALORVM STVLTITIA EST MATER",
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
                    text: 'A si? bhe tu sei brutto e stupido',
                    status: 'received'
                },
                {
                    date: '06/06/2020 00:00:10',
                    text: 'Sarà, ma almeno sono un cittadino romano.',
                    status: 'sent'
                },
                {
                    date: '06/06/2020 00:01:22',
                    text: 'BASTA! Ne ho abbastanza! Io mi ribello',
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
                    text: 'Non capisco la battuta',
                    status: 'sent'
                },
                {
                    date: '23/04/2020 12:46:22',
                    text: 'TU non capisci noi CIOVANI',
                    status: 'received'
                },
                {
                    date: '23/04/2020 12:47:10',
                    text: 'Oi Mario, vedi che hai 50 anni...',
                    status: 'sent'
                },
                {
                    date: '23/04/2020 12:48:22',
                    text: "Sono giovane nell'anima",
                    status: 'received'
                },
                {
                    date: '23/04/2020 12:47:10',
                    text: 'Un giovane prossimo al pensionamento',
                    status: 'sent'
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
                    date: '23/04/2020 12:46:22',
                    text: 'Un paio di mesi',
                    status: 'received'
                },
                {
                    date: '23/04/2020 12:47:10',
                    text: 'bhe, non male in fin dei conti. E quale battello userai?',
                    status: 'sent'
                },
                {
                    date: '23/04/2020 12:48:22',
                    text: 'Costa Concordia',
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
                    date: '23/04/2020 12:46:22',
                    text: 'Mi sento molto solo',
                    status: 'received'
                },
                {
                    date: '23/04/2020 12:47:10',
                    text: 'Trovati una fidanzata',
                    status: 'sent'
                },
                {
                    date: '23/04/2020 12:48:22',
                    text: 'Ti ho scritto per questo',
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
        // MESSAGES APPEAR ON CLICK
        this.currentMessages = elem.messages,
        // HIDING DEFAULT IMAGE (MIDDLE SECTION) ON CLICK
        this.showImage = !this.defaultImg
        // ADDING TEXT FROM INPUT TO ARRAY (PRINTED IN PAGE)

      }, // END OF MOVING CONTACTS FUNCTION (IN METHODS)------------------------


      sendMessage: function() {

        this.objUser = {
          data: new Date(),
          text: this.addTextIntoArray,
          status: "sent",
        }

        // IF USER TRIES TO SEND EVEN ONE SINGLE LETTER
        if (this.addTextIntoArray.length > 0) {

          // THEN IT CAN GO INTO THE ARRAY (LINE 427 OF JS)
          this.currentMessages.push(this.objUser);

          // AND WE HAVE A DEFALUT ANSWER THAT COMES AFTER 3 SECONDS

          const savedIndex = this.currentMessages; // this CONST is to not make the message appear in another chat if we quickly send a message and go to another chat: saving the "index" into a const so it is not effected by the setTimeout and the message arrives to the right person.(saveIndex appears a couple of lines after the setTimeout as well)
          this.defaultMessage = setTimeout(() => { // (THIS IS THE DEFAULT ANSWER)
            this.defaultMessage = {
              "date": new Date(),
              "text": "Va bene",
              "status": "received"
            }
            savedIndex.push(this.defaultMessage); // (PUSHED INTO THE ARRAY)
          }, 3000) // after 3 seconds

          // THIS MAKES THE TEXT GO AWAY ONCE YOU "SEND" IT IN THE ARRAY
          this.addTextIntoArray = "";

        // BUT IF USER TRIES TO SEND NO WORDS/LETTERS AT ALL, THEN:
        } else {
          console.log("WRITE SOMETHING");
        }

      }, // END OF sendMessage FUNCTION (IN METHODS)-----------------------------


      // THIS FUNCTION IS TO NOT MAKE THE TEXT GO OUTSIDE OF THE "LI"
      cutText: function (text, length, suffix) { // (check line 91 of HTML) I pass the name of thsi funtion inside th {{ }} and then I pass it the parameters: text, length (decide how long you want the string to be), and then the suffix "..."
        if (text.length > length) {
          return text.substring(0, length) + suffix;
        } else {
          return text; // but if the text is no longer than the length I decided then it gives back the length
        }


      }, // END OF cutText FUNCTION (IN METHODS)-----------------------------


    }, // END OF METHODS--------------------------------------------------------

    computed: {
      filteredContacts: function() {
        return this.contacts.filter((element) => { // the filter function cycles into the array
          if (element.name.toLowerCase().includes(this.searchContacts.toLowerCase())) { // and checks that the elements name (toLowerCase transforms all strings to lower case so we don't have an issue if we type a capital) and if this is included in the input (thai is also a variable)
            return element; // then it returns the filtered element
          }
        });
      }

    } // END OF COMPUTED ("computed" always returns something)

  }) // END OF vueFunction

} // END OF VUE

// -----------------------------------------------------------------------------

function init () {
  vueFunction();
}

document.addEventListener("DOMContentLoaded", init);
// -----------------------------------------------------------------------------
