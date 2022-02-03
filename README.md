<img src="misc/logo.svg">

_Steldrow_ is a [Wordle](https://www.powerlanguage.co.uk/wordle/) solver by Stelynx. The name comes from
_Stelynx_ and _wordle_ reversed.

## About Wordle

Wordle is a very popular word-based game. The goal of the game is to guess a word with 5 letters from predefined dictionary in 6 guesses in as little tries as possible.

After each guess, the game shows you for every letter
in your guess, if that character is on the correct position (result is _correct_), is in the word but on another position (result is _present_), or is not in the word at all (result is _absent_).

## Algorithm

Steldrow is a completely deterministic algorithm. It is initialized with two lists of words,
the common and uncommon ones. These word lists are taken from Wordle page source code and are defined in [wordlist.js](src/wordlist.js).

Then, for each round, the following is performed:

1. From the common words, a character frequency is calculated, counting all occurences of the same character inside one word as one occurence (e.g. both "eerie" and "taken" add 1 to frequency of character "e").
2. Words are sorted by their character frequencies. The scoring function takes a set of characters in a word and sums their precalculated frequencies. Words are then sorted from highest to lowest score.
3. The first word is taken from the sorted list and used as a guess.
4. If the word was correct, the algorithm stops.
5. Otherwise, both common and uncommon words are filtered based on the result obtained. Filtering function removes the words that

   - do not have _correct_ characters on proper indices,
   - have _present_ characters on the same index as the guess word,
   - do not contain _present_ characters at all,
   - contain the _absent_ characters.

6. If filtered common word list is empty, it is replaces by uncommon word list (that has also been filtered on every step).

## Results

In this section, the results will be posted. The script is being run in Safari 15.0.

**Spoiler Alert** Latest Wordle results are on the top. The table also contains **solutions**.

<table>
  <tr>
    <th style="text-align: center">Wordle #</th>
    <th style="text-align: center">Date</th>
    <th style="text-align: center">Score</th>
    <th style="text-align: center">Image</th>
    <th style="text-align: center">Guesses</th>
  </tr>
  <tr>
    <td style="text-align: center">229</td>
    <td style="text-align: center">02/03/2022</td>
    <td style="text-align: center">3/6</td>
    <td style="text-align: center">
      🟨⬜⬜🟩⬜<br>⬜🟩🟩🟩🟩<br>🟩🟩🟩🟩🟩<br>
    </td>
    <td style="text-align: center">
      <table>
        <tr>
          <td style="text-align: center">A</td>
          <td style="text-align: center">L</td>
          <td style="text-align: center">E</td>
          <td style="text-align: center">R</td>
          <td style="text-align: center">T</td>
        </tr>
        <tr>
          <td style="text-align: center">C</td>
          <td style="text-align: center">H</td>
          <td style="text-align: center">A</td>
          <td style="text-align: center">R</td>
          <td style="text-align: center">D</td>
        </tr>
        <tr>
          <td style="text-align: center">S</td>
          <td style="text-align: center">H</td>
          <td style="text-align: center">A</td>
          <td style="text-align: center">R</td>
          <td style="text-align: center">D</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="text-align: center">228</td>
    <td style="text-align: center">02/02/2022</td>
    <td style="text-align: center">5/6</td>
    <td style="text-align: center">
      ⬜⬜⬜⬜🟨<br>⬜🟩🟩🟩🟩<br>⬜🟩🟩🟩🟩<br>⬜🟩🟩🟩🟩<br>🟩🟩🟩🟩🟩<br>
    </td>
    <td style="text-align: center">
      <table>
        <tr>
          <td style="text-align: center">A</td>
          <td style="text-align: center">L</td>
          <td style="text-align: center">E</td>
          <td style="text-align: center">R</td>
          <td style="text-align: center">T</td>
        </tr>
        <tr>
          <td style="text-align: center">H</td>
          <td style="text-align: center">O</td>
          <td style="text-align: center">I</td>
          <td style="text-align: center">S</td>
          <td style="text-align: center">T</td>
        </tr>
        <tr>
          <td style="text-align: center">J</td>
          <td style="text-align: center">O</td>
          <td style="text-align: center">I</td>
          <td style="text-align: center">S</td>
          <td style="text-align: center">T</td>
        </tr>
        <tr>
          <td style="text-align: center">F</td>
          <td style="text-align: center">O</td>
          <td style="text-align: center">I</td>
          <td style="text-align: center">S</td>
          <td style="text-align: center">T</td>
        </tr>
        <tr>
          <td style="text-align: center">M</td>
          <td style="text-align: center">O</td>
          <td style="text-align: center">I</td>
          <td style="text-align: center">S</td>
          <td style="text-align: center">T</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="text-align: center">227</td>
    <td style="text-align: center">02/01/2022</td>
    <td style="text-align: center">3/6</td>
    <td style="text-align: center">
      ⬜⬜🟨⬜🟨<br>🟨⬜⬜🟨🟩<br>🟩🟩🟩🟩🟩<br>
    </td>
    <td style="text-align: center">
      <table>
        <tr>
          <td style="text-align: center">A</td>
          <td style="text-align: center">L</td>
          <td style="text-align: center">E</td>
          <td style="text-align: center">R</td>
          <td style="text-align: center">T</td>
        </tr>
        <tr>
          <td style="text-align: center">S</td>
          <td style="text-align: center">U</td>
          <td style="text-align: center">I</td>
          <td style="text-align: center">T</td>
          <td style="text-align: center">E</td>
        </tr>
        <tr>
          <td style="text-align: center">T</td>
          <td style="text-align: center">H</td>
          <td style="text-align: center">O</td>
          <td style="text-align: center">S</td>
          <td style="text-align: center">E</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="text-align: center">226</td>
    <td style="text-align: center">01/31/2022</td>
    <td style="text-align: center">3/6</td>
    <td style="text-align: center">
      ⬜🟨⬜⬜🟩<br>🟨⬜🟨🟨🟩<br>🟩🟩🟩🟩🟩<br>
    </td>
    <td style="text-align: center">
      <table>
        <tr>
          <td style="text-align: center">A</td>
          <td style="text-align: center">L</td>
          <td style="text-align: center">E</td>
          <td style="text-align: center">R</td>
          <td style="text-align: center">T</td>
        </tr>
        <tr>
          <td style="text-align: center">G</td>
          <td style="text-align: center">U</td>
          <td style="text-align: center">I</td>
          <td style="text-align: center">L</td>
          <td style="text-align: center">T</td>
        </tr>
        <tr>
          <td style="text-align: center">L</td>
          <td style="text-align: center">I</td>
          <td style="text-align: center">G</td>
          <td style="text-align: center">H</td>
          <td style="text-align: center">T</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="text-align: center">225</td>
    <td style="text-align: center">01/30/2022</td>
    <td style="text-align: center">3/6</td>
    <td style="text-align: center">
      ⬜⬜⬜🟨⬜<br>⬜🟨🟨⬜⬜<br>🟩🟩🟩🟩🟩<br>
    </td>
    <td style="text-align: center">
      <table>
        <tr>
          <td style="text-align: center">A</td>
          <td style="text-align: center">L</td>
          <td style="text-align: center">E</td>
          <td style="text-align: center">R</td>
          <td style="text-align: center">T</td>
        </tr>
        <tr>
          <td style="text-align: center">C</td>
          <td style="text-align: center">U</td>
          <td style="text-align: center">R</td>
          <td style="text-align: center">I</td>
          <td style="text-align: center">O</td>
        </tr>
        <tr>
          <td style="text-align: center">W</td>
          <td style="text-align: center">R</td>
          <td style="text-align: center">U</td>
          <td style="text-align: center">N</td>
          <td style="text-align: center">G</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="text-align: center">224</td>
    <td style="text-align: center">01/29/2022</td>
    <td style="text-align: center">4/6</td>
    <td style="text-align: center">
      ⬜🟨⬜⬜⬜<br>🟨🟩🟩⬜⬜<br>⬜🟩🟩🟩🟩<br>🟩🟩🟩🟩🟩
    </td>
    <td style="text-align: center">
      <table>
        <tr>
          <td style="text-align: center">A</td>
          <td style="text-align: center">L</td>
          <td style="text-align: center">E</td>
          <td style="text-align: center">R</td>
          <td style="text-align: center">T</td>
        </tr>
        <tr>
          <td style="text-align: center">L</td>
          <td style="text-align: center">O</td>
          <td style="text-align: center">U</td>
          <td style="text-align: center">S</td>
          <td style="text-align: center">Y</td>
        </tr>
        <tr>
          <td style="text-align: center">W</td>
          <td style="text-align: center">O</td>
          <td style="text-align: center">U</td>
          <td style="text-align: center">L</td>
          <td style="text-align: center">D</td>
        </tr>
        <tr>
          <td style="text-align: center">C</td>
          <td style="text-align: center">O</td>
          <td style="text-align: center">U</td>
          <td style="text-align: center">L</td>
          <td style="text-align: center">D</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="text-align: center">223</td>
    <td style="text-align: center">01/28/2022</td>
    <td style="text-align: center">4/6</td>
    <td style="text-align: center">
⬜⬜🟨🟨⬜<br>🟨⬜⬜⬜🟨<br>⬜🟨⬜🟨⬜<br>🟩🟩🟩🟩🟩
    </td>
    <td style="text-align: center">
      <table>
        <tr>
          <td style="text-align: center">A</td>
          <td style="text-align: center">L</td>
          <td style="text-align: center">E</td>
          <td style="text-align: center">R</td>
          <td style="text-align: center">T</td>
        </tr>
        <tr>
          <td style="text-align: center">R</td>
          <td style="text-align: center">O</td>
          <td style="text-align: center">U</td>
          <td style="text-align: center">S</td>
          <td style="text-align: center">E</td>
        </tr>
        <tr>
          <td style="text-align: center">F</td>
          <td style="text-align: center">R</td>
          <td style="text-align: center">I</td>
          <td style="text-align: center">E</td>
          <td style="text-align: center">D</td>
        </tr>
        <tr>
          <td style="text-align: center">P</td>
          <td style="text-align: center">E</td>
          <td style="text-align: center">R</td>
          <td style="text-align: center">K</td>
          <td style="text-align: center">Y</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="text-align: center">222</td>
    <td style="text-align: center">01/27/2022</td>
    <td style="text-align: center">4/6</td>
    <td style="text-align: center">
      ⬜⬜⬜⬜🟩<br>⬜🟩⬜⬜🟩<br>⬜🟩🟨🟨🟩<br>🟩🟩🟩🟩🟩
    </td>
    <td style="text-align: center">
      <table>
        <tr>
          <td style="text-align: center">A</td>
          <td style="text-align: center">L</td>
          <td style="text-align: center">E</td>
          <td style="text-align: center">R</td>
          <td style="text-align: center">T</td>
        </tr>
        <tr>
          <td style="text-align: center">H</td>
          <td style="text-align: center">O</td>
          <td style="text-align: center">I</td>
          <td style="text-align: center">S</td>
          <td style="text-align: center">T</td>
        </tr>
        <tr>
          <td style="text-align: center">D</td>
          <td style="text-align: center">O</td>
          <td style="text-align: center">N</td>
          <td style="text-align: center">U</td>
          <td style="text-align: center">T</td>
        </tr>
        <tr>
          <td style="text-align: center">M</td>
          <td style="text-align: center">O</td>
          <td style="text-align: center">U</td>
          <td style="text-align: center">N</td>
          <td style="text-align: center">T</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="text-align: center">221</td>
    <td style="text-align: center">01/26/2022</td>
    <td style="text-align: center">3/6</td>
    <td style="text-align: center">
      🟨⬜⬜⬜⬜<br>⬜🟨⬜⬜⬜<br>🟩🟩🟩🟩🟩<br>
    </td>
    <td style="text-align: center">
      <table>
        <tr>
          <td style="text-align: center">A</td>
          <td style="text-align: center">L</td>
          <td style="text-align: center">E</td>
          <td style="text-align: center">R</td>
          <td style="text-align: center">T</td>
        </tr>
        <tr>
          <td style="text-align: center">M</td>
          <td style="text-align: center">A</td>
          <td style="text-align: center">S</td>
          <td style="text-align: center">O</td>
          <td style="text-align: center">N</td>
        </tr>
        <tr>
          <td style="text-align: center">W</td>
          <td style="text-align: center">H</td>
          <td style="text-align: center">A</td>
          <td style="text-align: center">C</td>
          <td style="text-align: center">K</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="text-align: center">220</td>
    <td style="text-align: center">01/25/2022</td>
    <td style="text-align: center">4/6</td>
    <td style="text-align: center">
      🟨⬜⬜🟨⬜<br>⬜🟨🟨⬜⬜<br>⬜⬜🟩🟩🟩<br>🟩🟩🟩🟩🟩<br>
    </td>
    <td style="text-align: center">
      <table>
        <tr>
          <td style="text-align: center">A</td>
          <td style="text-align: center">L</td>
          <td style="text-align: center">E</td>
          <td style="text-align: center">R</td>
          <td style="text-align: center">T</td>
        </tr>
        <tr>
          <td style="text-align: center">B</td>
          <td style="text-align: center">A</td>
          <td style="text-align: center">R</td>
          <td style="text-align: center">O</td>
          <td style="text-align: center">N</td>
        </tr>
        <tr>
          <td style="text-align: center">C</td>
          <td style="text-align: center">I</td>
          <td style="text-align: center">G</td>
          <td style="text-align: center">A</td>
          <td style="text-align: center">R</td>
        </tr>
        <tr>
          <td style="text-align: center">S</td>
          <td style="text-align: center">U</td>
          <td style="text-align: center">G</td>
          <td style="text-align: center">A</td>
          <td style="text-align: center">R</td>
        </tr>
      </table>
    </td>
  </tr>
</table>
