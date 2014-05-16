#SpotOn Url Fetcher API

This API will return a JSON object with up to 10 urls to different events from an event webpage.

##To run locally, from the command line:

````
npm install
node app.js
````
With the app up and running, the API endpoint is:

````
localhost:3000/events/SOME-EVENT-URL
````

of course, SOME-EVENT-URL is a URI endcoded URL to an event page on one of the following websites:

http://calendar.boston.com/
http://www.sfmoma.org/
http://www.workshopsf.org/
http://events.stanford.edu/
http://events.sfgate.com/
http://events.7x7.com/


Alternatively, a user can visit

````
localhost:3000/
````
and enter a url into the text area, then click submit