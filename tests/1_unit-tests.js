const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator();

suite('Unit Tests', () => {
// 1 Translate Mangoes are my favorite fruit. to British English
	test('Translate Mangoes are my favorite fruit. to British English', function () {
        assert.strictEqual(translator.america_to_brit("Mangoes are my favorite fruit."), 'Mangoes are my <span class="highlight">favourite</span> fruit.');
	});
	// 2 Translate I ate yogurt for breakfast. to British English
	test('Translate I ate yogurt for breakfast. to British English', function () {
        assert.strictEqual(translator.america_to_brit("I ate yogurt for breakfast."), 'I ate <span class="highlight">yoghurt</span> for breakfast.');
	});
	// 3 Translate We had a party at my friend's condo. to British English
	test("Translate We had a party at my friend's condo. to British English", function () {
        assert.strictEqual(translator.america_to_brit("We had a party at my friend's condo."), 'We had a party at my friend\'s <span class="highlight">flat</span>.');
	});
	// 4 Translate Can you toss this in the trashcan for me? to British English
	test('Translate Can you toss this in the trashcan for me? to British English', function () {
        assert.strictEqual(translator.america_to_brit("Can you toss this in the trash can for me?"), 'Can you toss this in the <span class="highlight">bin</span> for me?');
	});
	// 5 Translate The parking lot was full. to British English
	test('Translate The parking lot was full. to British English', function () {
        assert.strictEqual(translator.america_to_brit("The parking lot was full."), 'The <span class="highlight">car park</span> was full.');
	});
	// 6 Translate Like a high tech Rube Goldberg machine. to British English
	test('Translate Like a high tech Rube Goldberg machine. to British English', function () {
        assert.strictEqual(translator.america_to_brit("Like a high tech Rube Goldberg machine."), 'Like a high tech <span class="highlight">Heath Robinson device</span>.');
	});
	// 7 Translate To play hooky means to skip class or work. to British English
	test('Translate To play hooky means to skip class or work. to British English', function () {
        assert.strictEqual(translator.america_to_brit("To play hooky means to skip class or work."), 'To <span class="highlight">bunk off</span> means to skip class or work.');
	});
	// 8 Translate No Mr. Bond, I expect you to die. to British English
	test('Translate No Mr. Bond, I expect you to die. to British English', function () {
        assert.strictEqual(translator.america_to_brit("No Mr. Bond, I expect you to die."), 'No <span class="highlight">Mr</span> Bond, I expect you to die.');
	});
	// 9 Translate Dr. Grosh will see you now. to British English
	test('Translate Dr. Grosh will see you now. to British English', function () {
        assert.strictEqual(translator.america_to_brit("Dr. Grosh will see you now."), '<span class="highlight">Dr</span> Grosh will see you now.');
	});
	// 10 Translate Lunch is at 12:15 today. to British English
	test('Translate Lunch is at 12:15 today. to British English', function () {
        assert.strictEqual(translator.america_to_brit("Lunch is at 12:15 today."), 'Lunch is at <span class="highlight">12.15</span> today.');
	});
	// 11 Translate We watched the footie match for a while. to American English
	test('Translate We watched the footie match for a while. to American English', function () {
        assert.strictEqual(translator.brit_to_america("We watched the footie match for a while."), 'We watched the <span class="highlight">soccer</span> match for a while.');
	});
	// 12 Translate Paracetamol takes up to an hour to work. to American English
	test('Translate Paracetamol takes up to an hour to work. to American English', function () {
        assert.strictEqual(translator.brit_to_america("Paracetamol takes up to an hour to work."), '<span class="highlight">Tylenol</span> takes up to an hour to work.');
	});
	// 13 Translate First, caramelise the onions. to American English
	test('Translate First, caramelise the onions. to American English', function () {
        assert.strictEqual(translator.brit_to_america("First, caramelise the onions."), 'First, <span class="highlight">caramelize</span> the onions.');
	});
	// 14 Translate I spent the bank holiday at the funfair. to American English
	test('Translate I spent the bank holiday at the funfair. to American English', function () {
        assert.strictEqual(translator.brit_to_america("I spent the bank holiday at the funfair."), 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.');
	});
	// 15 Translate I had a bicky then went to the chippy. to American English
	test('Translate I had a bicky then went to the chippy. to American English', function () {
        assert.strictEqual(translator.brit_to_america("I had a bicky then went to the chippy."), 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.');
	});
	// 16 Translate I've just got bits and bobs in my bum bag. to American English
	test("Translate I've just got bits and bobs in my bum bag. to American English", function () {
        assert.strictEqual(translator.brit_to_america("I've just got bits and bobs in my bum bag."), 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.');
	});
	// 17 Translate The car boot sale at Boxted Airfield was called off. to American English
	test('Translate The car boot sale at Boxted Airfield was called off. to American English', function () {
        assert.strictEqual(translator.brit_to_america("The car boot sale at Boxted Airfield was called off."), 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
	});
	// 18 Translate Have you met Mrs Kalyani? to American English
	test('Translate Have you met Mrs Kalyani? to American English', function () {
        assert.strictEqual(translator.brit_to_america("Have you met Mrs Kalyani?"), 'Have you met <span class="highlight">Mrs.</span> Kalyani?');
	});
	// 19 Translate Prof Joyner of King's College, London. to American English
	test("Translate Prof Joyner of King's College, London. to American English", function () {
        assert.strictEqual(translator.brit_to_america("Prof Joyner of King's College, London."), '<span class="highlight">Prof.</span> Joyner of King\'s College, London.');
	});
	//Translate Tea time is usually around 4 or 4.30. to American English
	test('Translate Tea time is usually around 4 or 4.30. to American English', function () {
        assert.strictEqual(translator.brit_to_america("Tea time is usually around 4 or 4.30."), 'Tea time is usually around 4 or <span class="highlight">4:30</span>.');
	});
	//Highlight translation in Mangoes are my favorite fruit.
	test('Highlight translation in Mangoes are my favorite fruit.', function () {
        assert.strictEqual(translator.america_to_brit("Mangoes are my favorite fruit."), 'Mangoes are my <span class="highlight">favourite</span> fruit.');
	});
	//Highlight translation in I ate yogurt for breakfast.
	test('Highlight translation in I ate yogurt for breakfast.', function () {
        assert.strictEqual(translator.america_to_brit("I ate yogurt for breakfast."), 'I ate <span class="highlight">yoghurt</span> for breakfast.');
	});
	//Highlight translation in We watched the footie match for a while.
	test('Highlight translation in We watched the footie match for a while.', function () {
        assert.strictEqual(translator.brit_to_america("We watched the footie match for a while."), 'We watched the <span class="highlight">soccer</span> match for a while.');
	});
	//Highlight translation in Paracetamol takes up to an hour to work.
	test('Highlight translation in Paracetamol takes up to an hour to work.', function () {
        assert.strictEqual(translator.brit_to_america("Paracetamol takes up to an hour to work."), '<span class="highlight">Tylenol</span> takes up to an hour to work.');
	});
});
