'use stricts';

const low = require('lowdb');
//inmemory 
const db = low();
//file DB create storage and low
//const storage = require('lowdb/file-sync');
//const db = low('db.json', { storage });
const recentSearchNode = db('recentSearch');

function Repo() {

	this.save = function(term) {
		console.log('Save term:'+term);
		recentSearchNode.push({ term: term, when: new Date().toISOString()})
	}

	this.recentSearch = function(amount) {
		var amount = amount || 20;
		console.log(recentSearchNode);
		return recentSearchNode.chain()
							   .reverse('when')
							   .take(amount)
							   .value();
	}
}

module.exports = Repo;