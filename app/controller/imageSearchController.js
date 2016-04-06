'use Strict';

const path = process.cwd();
const dbjs = require(path + '/app/repo/db.js');
const request = require('request');
const repo = new dbjs();
const key_500px = process.env.KEY_500PX

function Controller() {

	this.search = function(search_term, offset, res) {	
		//edge case
		if (search_term === undefined || search_term.length == 0) return {};

		const url = `https://api.500px.com/v1/photos/search?term=${search_term}&consumer_key=${key_500px}&image_size=1,1080&rpp=${offset}`		
		//req.params.search = ''
		request(url, function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		  	repo.save(search_term);

		    var result = JSON.parse(body).photos.map(function(val){		    	
		    	return {description: val.description, name: val.name, image_url: val.images};
		    })
		    
	    	return res.json(result);
		    
		  } else {
	  		return res.json(JSON.parse(body));	  	
		  }
		});					
	}

	this.recentSearch = function() {
		return repo.recentSearch();
	}

}

module.exports = Controller;