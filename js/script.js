
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

    }, // END OF DATA

    methods: {

    }); // END OF METHODS

} // END OF FUNCTION vueFunction

// -----------------------------------------------------------------------------

function init () {
  vueFunction();
}

document.addEventListener("DOMContentLoaded", init);
// -----------------------------------------------------------------------------
