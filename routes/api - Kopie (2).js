'use strict';

const Translator = require('../components/translator.js');
var fs = require('fs');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let text_ = req.body.text;
      let locale_ = req.body.locale;
	  //console.log("type of locale_", typeof locale_);
	  fs.appendFile('mynewfile3.txt', "Text:"+text_+" - type "+ (typeof text_) + "- loc: "+locale_+"- type "+ (typeof locale_) +"\n", function (err) {
  if (err) throw err;
  console.log('Replaced!');
}); 
	  if ( (typeof text_) == undefined || (typeof text_) != "string" || text_ == null || (typeof locale_) == undefined || (typeof locale_) != "string" ){
		  return res.json({ error: 'Required field(s) missing' });
	  } 
	  if ( text_ == ""){
	    return res.json({ error: 'No text to translate' });
	  }
	  if ( locale_ != "american-to-british" && locale_ != "british-to-american" ){
	    return res.json({ error: 'Invalid value for locale field' });
	  }
	  //text_ = text_ + "";
	  //locale_ = locale_ + "";
	  let transl = "";
	  if (locale_ == "american-to-british"){
		  transl = translator.america_to_brit(text_);
	  }
	  if (locale_ == "british-to-american"){
		  transl = translator.brit_to_america(text_);
	  }
	  //console.log("txt: 36", transl, text_)
	  if ( transl == text_ ){
	  let split_word = transl.split("");
	  if (transl.substr(0,24) == "<span class='highlight'>" ) {
		  split_word[24] = split_word[24].toUpperCase();
	  
	  } else {
	      split_word[0] = split_word[0].toUpperCase();
	  }
	  console.log(split_word);
	  transl = split_word.join("");
		  //console.log("Ende:", transl);
	}
	  if ( transl != text_ ){
		  
	  
		  fs.appendFile('mynewfile3.txt', transl +"\n\n", function (err) {
  if (err) throw err;
  console.log('Replaced!');
}); 
		return res.json({ text: text_ , translation: transl }); //all_words.join(' ')
	  } else {
		  
		  fs.appendFile('mynewfile3.txt', "Everything looks good to me!\n\n", function (err) {
  if (err) throw err;
  console.log('Replaced!');
}); 
		return res.json({ text: text_ , translation: 'Everything looks good to me!' }); //all_words.join(' ')
	  }
    });
};
