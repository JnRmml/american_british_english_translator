//const utils = require("./utils");

const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

//const reversedAmericanOnly = utils.reverseObject(americanOnly);
//const revAmeToBritSpelling = utils.reverseObject(americanToBritishSpelling);
//const revAmeToBritTitles = utils.reverseObject(americanToBritishTitles);

    let brit_to_america = Object.fromEntries(Object.entries(americanToBritishSpelling).map(a => a.reverse()));
    let brit_to_america_title = Object.fromEntries(Object.entries(americanToBritishTitles).map(a => a.reverse()));
	
function replaceTimeSeparator(sentence, sep, newSep, highlight = (word) => word) {
  let newSentence = sentence.slice();
  const regex = new RegExp("\\d+" + sep + "\\d+", 'g');

  const matches = sentence.match(regex);

  if (matches) {
    matches.forEach((match) => {
    const replacedMatch = match.replace(sep, newSep);
    newSentence = newSentence.replace(match, highlight(replacedMatch));
  });
  }

  return newSentence;
}
	
function smartReplace(
  sentence,
  dictionary,
  highlight = (s) => s,
  ignorePunctuation = true
) {
  const _punctuation = /[.,]/g;
  let newSentence = sentence.slice();

  const words = sentence.split(" ");
  const nWords = words.length;
  let phrases = []; // Phrases of l length found in sentence.

  for (let l = nWords; l > 0; l--) {
    for (let i = 0; i < nWords - l + 1; i++) {
      let newPhrase = words
        .slice(i, i + l)
        .join(" ")
        .toLowerCase();
      if (ignorePunctuation) newPhrase = newPhrase.replace(_punctuation, "");
      phrases.push(newPhrase);
    }
  }

  // Replace
  phrases.forEach((phrase) => {
    let regexp = new RegExp(phrase, "gi");
    if (dictionary[phrase])
      newSentence = newSentence.replace(regexp, highlight(dictionary[phrase]));
  });

  return newSentence;
}

function highlight(word) {
  return '<span class="highlight">' + word + "</span>";
}

function highlightCapitalize(word) {
  const capitalized = word[0].toUpperCase() + word.slice(1);
  return '<span class="highlight">' + capitalized + "</span>";
}

function americanToBritishTime(sentence, highlight) {
  return replaceTimeSeparator(sentence, ":", ".", highlight);
}

function britishToAmericanTime(sentence, highlight) {
  return replaceTimeSeparator(sentence, '.', ':', highlight);
}

class Translator {
  america_to_brit(sentence) {
    let newSentence = sentence.slice();

    newSentence = smartReplace(newSentence, americanOnly, highlight);
    newSentence = smartReplace(
      newSentence,
      americanToBritishSpelling,
      highlight
    );
    newSentence = smartReplace(
      newSentence,
      americanToBritishTitles,
      highlightCapitalize,
      false
    );
    newSentence = americanToBritishTime(newSentence, highlight);

    return newSentence;
  }

  brit_to_america(sentence) {
    let newSentence = sentence.slice();

    newSentence = smartReplace(newSentence, britishOnly, highlight);
    newSentence = smartReplace(
      newSentence,
      brit_to_america,
      highlight
    );
    newSentence = smartReplace(
      newSentence,
      brit_to_america_title,
      highlightCapitalize,
      false
    );
    newSentence = britishToAmericanTime(newSentence, highlight);

    return newSentence;
  }
}

module.exports = Translator;
