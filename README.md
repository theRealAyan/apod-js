# nasa-apod-js

`apod-js` is an API client for fetching NASA's Astronomy Picture Of the Day. 
```bash
<<<<<<< HEAD
$ yarn add nasa-apod-js
$ npm i nasa-apod-js
=======
$ git clone https://github.com/theRealAyan/apod-js
$ cd apod-js 
$ yarn add #you can use npm install instead
>>>>>>> d1024e37151241d1b40ea2bcd727f917c97ccaf6
```
```js
const apod = require('./apod-js');
apod.fetch('your-api-key').then(data => console.log(data))
```
