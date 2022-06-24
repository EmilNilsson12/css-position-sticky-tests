const guessContainer = document.getElementById('current-guess');
const tableOfGuesses = document.getElementById('table-of-guesses');
const guessNumberContainer = document.getElementById(
  'table-of-guesses-guess-number'
);
const guessGuessContainer = document.getElementById(
  'table-of-guesses-guess-guess'
);

document.readyState === 'interactive' &&
  function () {
    document
      .querySelector(window)
      .scroll(function () {
        document.querySelector('.right').style.transform =
          'translate3d(0,' +
          document.querySelector(this).scrollTop * 2 +
          'px, 0)';
      })
      .scroll();
  };
