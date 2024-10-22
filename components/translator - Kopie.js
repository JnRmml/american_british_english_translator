const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');

class Translator {
    translate(word, loc){
		/*
		//if(americanToBritishSpelling(word) != undefined){
		//	return americanToBritishSpelling(word);
		//}
		let brit_to_america = Object.fromEntries(Object.entries(americanToBritishSpelling).map(a => a.reverse()));
		let brit_to_america_title = Object.fromEntries(Object.entries(americanToBritishTitles).map(a => a.reverse()));
			console.log("undefined?", americanToBritishSpelling[word]);
	if(loc == "american-to-british"){ 
		console.log("america-to-brit", americanToBritishSpelling[word]);
		if(americanToBritishSpelling[word] != undefined){
			console.log(americanToBritishSpelling[word]);
			return "<span class='highlight'>"+americanToBritishSpelling[word]+"</span>";
			} 
			if (americanOnly[word] != undefined){
					return "<span class='highlight'>"+americanOnly[word]+"</span>";
				}
				
			if (brit_to_america[word] != undefined){
				return word;
			}
			if (americanToBritishTitles[word] != undefined){
				return americanToBritishTitles[word];
			}
				let timeRegexAmerican = /^([0-1]?[0-9]):([0-5][0-9])$/;
				if (timeRegexAmerican.test(word)) {
					let time = word.match(timeRegexAmerican);
					let hours = parseInt(time[0]), minutes = parseInt(time[1]);
if (!isNaN(hours) && !isNaN(minutes)) {
					return "<span class='highlight'>" + time[1] + "." + time[2] + "</span>";
}
					} 
				
				/*let time = word.split(':');
				console.log(time);
				if (time[0] != undefined  && time[0] != null  && time[1] != undefined  && time[1] != null && Number.isInteger(parseInt(time[0])) && Number.isInteger(parseInt(time[1]))) {
					return "<span class='highlight'>"+time[0]+"."+time[1]+"</span>";
				}*//*
		}
		if(loc == "british-to-american") {
			if ( brit_to_america[word] != undefined){
				return "<span class='highlight'>"+brit_to_america[word]+"</span>";
				} 
			if (britishOnly[word] != undefined){
				return "<span class='highlight'>"+britishOnly[word]+"</span>";
				}
				
			if (americanToBritishSpelling[word] != undefined){
				return word;
			}
			if (brit_to_america_title[word] != undefined){
				return brit_to_america_title[word];
			}
				let timeRegexBritish = /^([0-1]?[0-9])\.([0-5][0-9])$/;

				if (loc == "british-to-american" && timeRegexBritish.test(word)) {
					let time = word.match(timeRegexBritish);
					let hours = parseInt(time[0]), minutes = parseInt(time[1]);
if (!isNaN(hours) && !isNaN(minutes)) {
					return "<span class='highlight'>" + time[1] + ":" + time[2] + "</span>";
}
					}
				
				/*let time = word.split('.');
				if (time[0] != undefined  && time[0] != null && time[1] != undefined  && time[1] != null && Number.isInteger(parseInt(time[0])) && Number.isInteger(parseInt(time[1]))) {
				console.log(time);
					return "<span class='highlight'>"+time[0]+":"+time[1]+"</span>";
					}/**/
				/*}
					
					if ( (time != undefined ) && (parseInt(time[0]).isInteger) && parseInt(time[1]).isInteger){
						//let time = word.split('.');
				return "<span class='highlight'>"+time[0]+":"+time[1]+"</span>";
					}
			} else {
				if(loc == "british-to-american" && britishOnly["word"] != undefined){
					return "<span class='highlight'>"+britishOnly["word"]+"</span>";
				} else {
					if(loc == "american-to-british" && americanOnly["word"] != undefined){
					return "<span class='highlight'>"+americanOnly["word"]+"</span>";
				} else {
					if(loc == "american-to-british" && americanToBritishTitles["word"] != undefined){
					return "<span class='highlight'>"+americanToBritishTitles["word"]+"</span>";
				}else {
					if(loc == "american-to-british" && brit_to_america_title["word"] != undefined){
					return "<span class='highlight'>"+brit_to_america_title["word"]+"</span>";
				}
				}
					
				}
				}
			}
			}/**//*
			if (loc == "american-to-british" && americanToBritishTitles[word.toLowerCase()] !== undefined) {
  return "<span class='highlight'>" + americanToBritishTitles[word.toLowerCase()] + "</span>";
} else if (loc == "british-to-american" && brit_to_america_title[word.toLowerCase()] !== undefined) {
  return "<span class='highlight'>" + brit_to_america_title[word.toLowerCase()] + "</span>";
}
		 
			return word;
		*/
    let brit_to_america = Object.fromEntries(Object.entries(americanToBritishSpelling).map(a => a.reverse()));
    let brit_to_america_title = Object.fromEntries(Object.entries(americanToBritishTitles).map(a => a.reverse()));
    
    // Zeitregulare Ausdrücke
    let timeRegexAmerican = /^([0-1]?[0-9]):([0-5][0-9])$/;
    let timeRegexBritish = /^([0-1]?[0-9])\.([0-5][0-9])$/;

    // Übersetzung amerikanisch zu britisch
    if (loc === "american-to-british") {
        if (americanToBritishSpelling[word] !== undefined) {
            return "<span class='highlight'>" + americanToBritishSpelling[word] + "</span>";
        }
        if (americanOnly[word] !== undefined) {
			let inp = americanOnly[word];/*.split('');
			inp[0] = inp[0].toUpperCase();
			inp = inp.join('');*/
            return "<span class='highlight'>" + inp + "</span>";
        }
        if (timeRegexAmerican.test(word)) {
            let time = word.match(timeRegexAmerican);
            return "<span class='highlight'>" + time[1] + "." + time[2] + "</span>";
        }
        if (timeRegexBritish.test(word)) {
            let time = word.match(timeRegexBritish);
            return "<span class='highlight'>" + time[1] + "." + time[2] + "</span>";
        }
		if (word != undefined){
        if (americanToBritishTitles[word] !== undefined) {
            return "<span class='highlight'>" + americanToBritishTitles[word]+ "</span>";
        }
			if (brit_to_america_title[word] !== undefined) {
			
				//return "<span class='highlight'>" + brit_to_america_title[word] + "</span>";
			}
		}
    }

    // Übersetzung britisch zu amerikanisch
    if (loc === "british-to-american") {
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
    }
    
    // Wenn nichts zutrifft, gebe das ursprüngliche Wort zurück
    return word;
	}

}


module.exports = Translator;