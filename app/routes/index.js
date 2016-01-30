'use stricts';

var path = process.cwd();
var Controller = require(path + '/app/controller/imageSearchController.js');
var imageSearch = new Controller();

module.exports = function(app) {

	app.route('/')
		.get(function(req, res){
			res.sendFile(path + "/public/index.html");
		});

	app.route('/api/imagesearch/:searchTerm')
		.get(function(req,res){
			var offset = req.query['offset'] || 20;
			imageSearch.search(req.params.searchTerm, offset, res);						
		}); 

	app.route('/api/latest/imagesearch')
		.get(function(req,res){
			res.json(imageSearch.recentSearch());
		}); 		

	// nothing else go back to home
	app.route('/*')
		.get(function(req, res) {
			res.redirect('/');
		});
};