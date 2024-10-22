const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');

class Translator {
    
	america_to_brit (text_){
	
    // Zeitregulare Ausdrücke
    let timeRegexAmerican = /([0-1]?[0-9]):([0-5][0-9])/g;
    let timeRegexBritish = /([0-1]?[0-9])\.([0-5][0-9])/g;

    
		for (var key in americanToBritishSpelling){
			let r = new RegExp(key+"(?=\\s|[.,:!?])", 'gi');
			text_ = text_.replace(r, '<span class="highlight">' +americanToBritishSpelling[key] + '</span>');
		}
		for (var key in americanOnly){
			let r = new RegExp(key+"(?=\\s|[.,:!?])", 'gi');
			text_ = text_.replace(r, '<span class="highlight">' +americanOnly[key] + "</span>");
		}
        
		for (var key in americanToBritishTitles){
			let r = new RegExp(key+"(?=\\s|[.,:!?])", 'gi');
			text_ = text_.replace(r, '<span class="highlight">' +americanToBritishTitles[key]+ "</span>");
		}
		//console.log(text_);
        /*if (timeRegexAmerican.test(text_)) {
            
			let time = text_.match(timeRegexAmerican);
            text_ = text_.replace( timeRegexAmerican, "<span class='highlight'>" + time[1] + "." + time[2] + "</span>");
        }*/
	    text_ = text_.replace(timeRegexBritish, function (match, p1, p2) {
        return '<span class="highlight">' + p1 + "." + p2 + "</span>";
        });
        text_ = text_.replace(timeRegexAmerican, function (match, p1, p2) {
        return '<span class="highlight">' + p1 + "." + p2 + "</span>";
        });
	
        /*if (timeRegexBritish.test(text_)) {
		
			let time = text_.match(timeRegexBritish);
            text_ = text_.replace(timeRegexBritish, "<span class='highlight'>" + time[1] + "." + time[2] + "</span>");
        }/* /**/
        /*if (timeRegexBritish.test(word)) {
            let time = word.match(timeRegexBritish);
            return "<span class='highlight'>" + time[1] + "." + time[2] + "</span>";
        }*/
		/*if (word != undefined){
        if (americanToBritishTitles[word] !== undefined) {
            return "<span class='highlight'>" + americanToBritishTitles[word]+ "</span>";
        }
			if (brit_to_america_title[word] !== undefined) {
			
				//return "<span class='highlight'>" + brit_to_america_title[word] + "</span>";
			}
		}*/
		return text_;
    
	}

   brit_to_america (text_) {
    let brit_to_america = Object.fromEntries(Object.entries(americanToBritishSpelling).map(a => a.reverse()));
    let brit_to_america_title = Object.fromEntries(Object.entries(americanToBritishTitles).map(a => a.reverse()));
	
	
    // Zeitregulare Ausdrücke
    let timeRegexAmerican = /([0-1]?[0-9]):([0-5][0-9])/g;
    let timeRegexBritish = /([0-1]?[0-9])\.([0-5][0-9])/g;
    
		for (var key in britishOnly){
			let r = new RegExp(key+"(?=\\s|[.,:!?])", 'gi');
			text_ = text_.replace(r, '<span class="highlight">' +britishOnly[key] + "</span>");
		}
        
		for (var key in brit_to_america){
			let r = new RegExp(key+"(?=\\s|[.,:!?])", 'gi');
			text_ = text_.replace(r, '<span class="highlight">' +brit_to_america[key] + "</span>");
		}
		for (var key in brit_to_america_title){
			let r = new RegExp(key+"(?=\\s|[.,:!?])", 'gi');
			let inp = brit_to_america_title[key].split('');
			inp[0] = inp[0].toUpperCase();
			inp = inp.join('');
			text_ = text_.replace(r, '<span class="highlight">' +inp + "</span>");
		}
	
	    text_ = text_.replace(timeRegexAmerican, function (match, p1, p2) {
        return '<span class="highlight">' + p1 + ":" + p2 + "</span>";
        });
		text_ = text_.replace(timeRegexBritish, function (match, p1, p2) {
        return '<span class="highlight">' + p1 + ":" + p2 + "</span>";
        });
        /*if (timeRegexAmerican.test(text_)) {
			let time = text_.match(timeRegexAmerican);
             text_.replace( timeRegexAmerican, "<span class='highlight'>" + time[1] + ":" + time[2] + "</span>");
        }
		
        if (timeRegexBritish.test(text_)) {
			let time = text_.match(timeRegexBritish);
             text_.replace(timeRegexBritish, "<span class='highlight'>" + time[1] + ":" + time[2] + "</span>");
        }
			 
        if (timeRegexAmerican.test(word)) {
            let time = word.match(timeRegexAmerican);
            return "<span class='highlight'>" + time[1] + "." + time[2] + "</span>";
        }
        if (timeRegexBritish.test(word)) {
            let time = word.match(timeRegexBritish);
            return "<span class='highlight'>" + time[1] + "." + time[2] + "</span>";
        }*/
		/*if (word != undefined){
        if (americanToBritishTitles[word] !== undefined) {
            return "<span class='highlight'>" + americanToBritishTitles[word]+ "</span>";
        }
			if (brit_to_america_title[word] !== undefined) {
			
				//return "<span class='highlight'>" + brit_to_america_title[word] + "</span>";
			}
		}*/
		return text_;
    
	}
/*
	// Übersetzung britisch zu amerikanisch
        if (brit_to_america[word] !== undefined) {
            return "<span class='highlight'>" + brit_to_america[word] + "</span>";
        }
        if (britishOnly[word] !== undefined) {
            return "<span class='highlight'>" + britishOnly[word] + "</span>";
        }
        if (timeRegexBritish.test(word)) {
            let time = word.match(timeRegexBritish);
            return "<span class='highlight'>" + time[1] + ":" + time[2] + "</span>";
        }
        if (timeRegexAmerican.test(word)) {
            let time = word.match(timeRegexAmerican);
            return "<span class='highlight'>" + time[1] + ":" + time[2] + "</span>";
        }
		if (word != undefined){
			if (brit_to_america_title[word] !== undefined) {
				return "<span class='highlight'>" + brit_to_america_title[word] + "</span>";
			}
			if (brit_to_america_title[word.substr(0,2)] !== undefined){
				return "<span class='highlight'>" + brit_to_america_title[word.substr(0,2)] + "</span>.";
			}
		}
    
    
    // Wenn nichts zutrifft, gebe das ursprüngliche Wort zurück
    return word;
	}
*/
}


module.exports = Translator;