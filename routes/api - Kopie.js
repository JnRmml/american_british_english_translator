'use strict';

const Translator = require('../components/translator.js');
var fs = require('fs');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let text_ = req.body.text;
      let locale_ = req.body.locale;
	  fs.appendFile('mynewfile3.txt', "Text:"+text_+" - type "+ (typeof text_) + "- loc: "+locale_+"- type "+ (typeof locale_) +"\n", function (err) {
  if (err) throw err;
  console.log('Replaced!');
}); 
	  if ( text_ == ""){
	    return res.json({ error: 'No text to translate' });
	  }
	  if ( locale_ != "american-to-british" && locale_ != "british-to-american" ){
	    return res.json({ error: 'Invalid value for locale field' });
	  }
	  if (text_ == "" || text_ == null || locale_ == "" || locale_ == null  || (typeof text_ == undefined)){
		  return res.json({ error: 'Required field(s) missing' });
	  } 
	  text_ = text_ + "";
	  locale_ = locale_ + "";
	  console.log("Eingaben");
	  console.log("text", text_);
	  console.log("local", locale_);
	  let words_ = text_.split("");
	  let len = words_.length;
	  /*for (let j = 0; j < len; j++) {
		  let ind = words_[j].search("\n");
		  if (ind > -1) { //enthält ein \n
		  let W_arr = words_[j].split("\n");
		  console.log("b4 splice:", words_);
		  words_.splice(j, 1);
		  let end_arr = words_.slice(j);
		  console.log("parts:", W_arr, end_arr);
		  words_ = W_arr;
		  words_ = words_ + end_arr;
		  words_ = words_.split(',');
		  }
	  }*/
	  let all_words = [];
	  let single_word = "";
	  //console.log("Input_anf", words_, len, locale_);
	  for (let i = 0; i < len; i++){
		  let zeit = false;
		  if(words_[i] != " " && words_[i] != "." && words_[i] != ";"&& words_[i] != "," && words_[i] != "-" && words_[i] != ":" && words_[i] != '\n' && words_[i] != '' && words_[i] != '!' && words_[i] != '?'){
			  single_word += words_[i];
		  } else {
			  if (single_word != "") {
				  //console.log("single word", single_word);
				 //zeit
				if((words_[i] == "." || words_[i] == ":") && ! isNaN (parseInt(single_word)) && ! isNaN(parseInt(words_[i+1]+words_[i+2])) ){
					single_word += "" + words_[i] + words_[i+1] + words_[i+2];
					//console.log("rsdfgjbkergn", single_word);
			     	  all_words.push(single_word);
					i += 1;
					zeit = true
					single_word = "";
				} else { 
				  //titel
				if (words_[i] == "." && single_word+"." != translator.translate(single_word+".", locale_) ){
					single_word += ".";
			     	  all_words.push(single_word);
					  i += 1;
					  single_word = "";
				} else {
					//keine zeit oder titel --> wort einfügen
					console.log("in wörter array einfügen, 73", single_word);
					all_words.push(single_word);
			  single_word = "";
				}
			   }
			  }
			  
				//console.log(words_[i]);
			  if(words_[i] != '\n' && !zeit){
				all_words.push(words_[i]);
			  } else {
				  //console.log(words_[i]);
				  i++;
			  }
			  //i--;
		  }
		  //console.log(all_words);
	  }
	  if (single_word != "") {
		  all_words.push(single_word);
	  }
	  console.log("all_words_erg 94", all_words);
	  console.log("Input_text", text_);
	  console.log("Input2_ words", words_, len, locale_);
	  let changed = false;
	  len = all_words.length;
	  for (let i = 0; i < len; i++) {
		  let curr = all_words[i];
		  //console.log("cur_to_translate", all_words[i]);
		  all_words[i] = translator.translate(all_words[i], locale_);
		  //console.log("cur_translated", all_words[i]);
		if(curr != all_words[i]){
			changed = true;
		}
	  }
	  console.log("cannot read lenght", all_words[0]+"");
	  let first_word = [];
	  if(all_words[0].length > 1){
	    first_word = all_words[0].split('');
	  }else {
		first_word.push(all_words[0]);
	  }
	  console.log("type 114", typeof first_word, first_word);
	  let first_char = first_word[0]+"";
	  if (first_char != first_word[0].toUpperCase()) {
		first_word[0] = first_word[0].toUpperCase();
		all_words[0] = first_word.join('');
		changed = true;
	  }
	  //console.log("ende:", all_words);
	  //console.log("ende:", all_words);
	  if (changed){
		  fs.appendFile('mynewfile3.txt', all_words.join('')+"\n\n", function (err) {
  if (err) throw err;
  console.log('Replaced!');
}); 
		return res.json({ translation: all_words.join('') , text: text_ }); //all_words.join(' ')
	  } else {
		  fs.appendFile('mynewfile3.txt', "Everything looks good to me!\n\n", function (err) {
  if (err) throw err;
  console.log('Replaced!');
}); 
		return res.json({ translation: 'Everything looks good to me!' , text: text_ }); //all_words.join(' ')
	  }
    });
};
