const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');
let translator = new Translator();

suite('Functional Tests', () => {

    //Translation with text and locale fields: POST request to /api/translate
    test('Translation with text and locale fields: POST request to /api/translate', function (done) {
      chai
        .request(server)
        .keepOpen()
        .post('/api/translate')
		.send({ 
			"text": "petrol is important", 
			"locale": "british-to-american" 
			})
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.type, 'application/json');//'application/json' Object);
          assert.equal(res.body.translation , '<span class="highlight">gasoline</span> is important');
          assert.equal(res.body.text , 'petrol is important');
		  done();
        });
    });
    //Translation with text and invalid locale field: POST request to /api/translate
    test('Translation with text and invalid locale field: POST request to /api/translate', function (done) {
      chai
        .request(server)
        .keepOpen()
        .post('/api/translate')
		.send({ 
			"text": "petrol is important", 
			"locale": "british-to-german" 
			})
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.type, 'application/json');//'application/json' Object);
          assert.equal(res.body.error , 'Invalid value for locale field');
		  done();
        });
    });
    //Translation with text and invalid locale field: POST request to /api/translate
    test('Translation with text and invalid locale field: POST request to /api/translate', function (done) {
      chai
        .request(server)
        .keepOpen()
        .post('/api/translate')
		.send({ 
			"text": "petrol is important", 
			"locale": "british-to-german" 
			})
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.type, 'application/json');//'application/json' Object);
          assert.equal(res.body.error , 'Invalid value for locale field');
		  done();
        });
    });
    //Translation with missing locale field: POST request to /api/translate
    test('Translation with missing locale field: POST request to /api/translate', function (done) {
      chai
        .request(server)
        .keepOpen()
        .post('/api/translate')
		.send({ 
			"text": "petrol is important" 
			})
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.type, 'application/json');//'application/json' Object);
          assert.equal(res.body.error , 'Required field(s) missing');
		  done();
        });
    });
    //Translation with empty text: POST request to /api/translate
    test('Translation with empty text: POST request to /api/translate', function (done) {
      chai
        .request(server)
        .keepOpen()
        .post('/api/translate')
		.send({ 
			"text": "", 
			"locale": "british-to-american" 
			})
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.type, 'application/json');//'application/json' Object);
          assert.equal(res.body.error , 'No text to translate');
		  done();
        });
    });
    //Translation with text that needs no translation: POST request to /api/translate
    test('Translation with text that needs no translation: POST request to /api/translate', function (done) {
      chai
        .request(server)
        .keepOpen()
        .post('/api/translate')
		.send({ 
			"text": "The petrol is important", 
			"locale": "american-to-british" 
			})
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.type, 'application/json');//'application/json' Object);
          assert.equal(res.body.translation, 'Everything looks good to me!');
		  done();
        });
    });
});
