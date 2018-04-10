timeStampByCandle
=========================

Welcome to my TimeStamp microservice App.

This app will return a string containing Unix and natural date timestamps in json format. 

**To use,** pass a Unix or natural time string as a parameter to the url. The API will determine whether the parameter is a Unix or natural time string. API will retirn null values for invalid date strings.

Try it out [on Glitch](https://timeStampByCandle.glitch.me/).


Example Usage
------------

*Example Query*
- `https://timestamp-js.glitch.me/Oct%2013,%201989` or
- `https://timestamp-js.glitch.me/October 13, 1989` or
- `https://timestamp-js.glitch.me/624265200`

*Will return*
- `{"unix":624265200,"natural":"October 13, 1989"}`

*Example Query*
- `https://timeStampByCandle.glitch.me/Not a valid date`

*Will return*
- `{"unix":null,"natural":null}`


Made by [Cindy](https://github.com/Candle309)
-------------------