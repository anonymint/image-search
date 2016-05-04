# Image Search Service [![Build Status](https://travis-ci.org/anonymint/image-search.svg?branch=master)](https://travis-ci.org/anonymint/image-search)

This is backend image search powered by 500px.

### How to run it

Because this api use 500px as backend search you have to provide your own KEY_500PX in the .env file. 

#### To search

`/api/imagesearch/{search_term}?offset={number_of_results}` 

for example [Search for batman with 5 results](https://mighty-crag-74297.herokuapp.com/api/imagesearch/batman?offset=5)

#### Recently search

This will return the most 20 recently searched from the api above.

`/api/latest/imagesearch` 

for example [Recently Search](https://mighty-crag-74297.herokuapp.com/api/latest/imagesearch)
