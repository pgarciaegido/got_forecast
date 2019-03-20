const { getLocalStorageItem } = require('./formHandler');

const addSlideDownClass = (targetClass) => document.getElementsByClassName(targetClass)[0].classList.add('slideDown');

const init = () => {
  // LANDING ---------------------------------

  // Show my results or do quest button. Latter by default
  if (window.location.pathname === '/') {
    if (getLocalStorageItem()) {
      document.getElementById('my-results').style.cssText = 'display: block';
      document.getElementById('new-quest').style.cssText = 'display: none';
    }
  }

  // RESULTS ----------------------------------

  if (window.location.pathname === '/results' || window.location.pathname === '/submit') {
    addSlideDownClass("results-table");

    setTimeout(() => {
      addSlideDownClass("score");

      setTimeout(() => {
        addSlideDownClass("header");

        // Fill results
        setTimeout(() => {
          const scoreBarElement = document.getElementsByClassName("score-bar-correct")[0];
          const score = scoreBarElement.getAttribute("score");
          scoreBarElement.classList.remove('empty');

          let scoreNumberElement = document.getElementById('score-number');
          let startNumber = 0;
          let counter = 50;

          // Increase repeateadly the score number till it reaches the result
          // This function increases time on every iteration
          var myFunction = function () {
            scoreNumberElement.innerText = startNumber++;
            if (startNumber <= score) {
              counter += (counter * 0.08);
              setTimeout(myFunction, counter);
            }
          }
          setTimeout(myFunction, counter);

        }, 100);
      }, 100)
    }, 100);
  }
}

init();

module.exports = { init };
