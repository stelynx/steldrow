/** @constant {string} absent The evaluation when letter is not in a seeked word. */
const absent = 'absent';

/** @constant {string} present The evaluation when letter is in a seeked word but in another place. */
const present = 'present';

/** @constant {string} correct The evaluation when letter is in correct place. */
const correct = 'correct';

/**
 * Sets timeout for given duration in milliseconds.
 *
 * This is used in order to wait for animation to finish before
 * typing in new word.
 *
 * @param {number} ms milliseconds for sleep
 * @returns promise that is resolved in after the provided time
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Calculates number of words in which the letter is found.
 *
 * Multiple letters in same word count as one occurence.
 *
 * @param {string[]} wordlist list of words for letter frequency calculation
 * @returns object with letters as keys and number of occurences as values
 */
function getCharacterOccurences(wordlist) {
  const charCounts = {};
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < chars.length; i++) {
    charCounts[chars[i]] = 0;
  }

  for (let i = 0; i < wordlist.length; i++) {
    const charSet = new Set(wordlist[i].split(''));
    charSet.forEach(c => charCounts[c]++);
  }

  return charCounts;
}

/**
 * Sorts the given list of words by letter occurences.
 *
 * Scoring function creates a set of distinct characters in a word
 * and sums their letter occurences.
 *
 * @param {string[]} wordlist array of words to sort
 * @param {Object} occurences object with letters as keys and number of occurences as values
 * @returns sorted array of words according to scoring function
 */
function sortedWordlistByCharacterOccurence(wordlist, occurences) {
  const compare = (w1, w2) => {
    const charSet1 = new Set(w1.split(''));
    const charSet2 = new Set(w2.split(''));

    let score1 = 0;
    let score2 = 0;

    charSet1.forEach(c => (score1 += occurences[c]));
    charSet2.forEach(c => (score2 += occurences[c]));

    return score1 < score2;
  };

  return wordlist.sort(compare);
}

/**
 * Filters words and returns only those that satisfy the last
 * round result given the guess.
 *
 * @param {string[]} wordList array of words
 * @param {string[]} results array of length 5 representing the results from Wordle round
 * @param {string} guess the word that was the last guess
 * @returns array of filtered words
 */
function filterWords(wordList, results, guess) {
  let filteredWords = [...wordList];
  for (let i = 0; i < 5; i++) {
    if (results[i] == correct) {
      filteredWords = filteredWords.filter(word => word[i] == guess[i]);
    } else if (results[i] == present) {
      filteredWords = filteredWords.filter(
        word => word[i] != guess[i] && word.indexOf(guess[i]) != -1,
      );
    } else {
      filteredWords = filteredWords.filter(
        word => word.indexOf(guess[i]) == -1,
      );
    }
  }
  return filteredWords;
}

/**
 * Types given word in DOM and presses Enter key.
 *
 * @param {string} word a word to type to DOM
 */
function typeWord(word) {
  for (let i = 0; i < 5; i++) {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: word[i] }));
    window.dispatchEvent(new KeyboardEvent('keyup', { key: word[i] }));
  }
  window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
  window.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
}

/**
 * Parses last round evaluations from DOM.
 *
 * @param {number} rowIndex the last round number
 * @returns array of length 5 with evaluations
 */
function getResultsInRow(rowIndex) {
  const charNodeList = document
    .getElementsByTagName('game-app')[0]
    .shadowRoot.querySelector('game-theme-manager')
    .children[0].children[1].children[0].children[
      rowIndex
    ].shadowRoot.querySelectorAll('game-tile');

  const evaluations = [];
  for (let i = 0; i < 5; i++) {
    evaluations.push(charNodeList[i].getAttribute('evaluation'));
  }

  return evaluations;
}

/**
 * Main algorithm.
 */
async function main() {
  // `commonWords` and `uncommonWords` must be predefined.
  let words = commonWords;
  let words1 = uncommonWords;

  for (let round = 0; round < 6; round++) {
    const charOccurences = getCharacterOccurences(words);
    words = sortedWordlistByCharacterOccurence(words, charOccurences);

    const guess = words[0];
    typeWord(guess);
    const results = getResultsInRow(round);

    await sleep(3000);

    if (results.filter(x => x == correct).length == 5) break;

    words = filterWords(words, results, guess);
    words1 = filterWords(words1, results, guess);

    if (words.length == 0) {
      words = words1;
    }
  }
}

main();
