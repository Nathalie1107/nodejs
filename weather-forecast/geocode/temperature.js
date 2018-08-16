const request = require('request');

var temperature = (position, callback) => request({
    url: `https://api.darksky.net/forecast/df9af063680a9bc70cbe2f2ae0f77d6f/${position.latitude},${position.longtitude}`,
    json: true
}, (error, response, body) =>{
    if(error){
        callback(error);
    } else {
        callback(undefined, {
            temperature: (body.currently.temperature-32)*5/9
        })
        // console.log(`Address: ${body.results[0].formatted_address}`);
        // console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        // console.log(`Longtitude: ${body.results[0].geometry.location.lng}`);

    }
})

module.exports.temperature = temperature;