# nasa-apod-js

`apod-js` is an API client for fetching NASA's Astronomy Picture Of the Day. 
```bash
$ yarn add nasa-apod-js
$ npm i nasa-apod-js
```
```js
const apod = require('./apod-js');
apod.fetch('your-api-key').then(data => console.log(data))
```
