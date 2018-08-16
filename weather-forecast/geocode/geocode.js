
const request = require('request');

var geocodeAddress = (address, callback) => request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCYkfhT4iF3ZQ5TpT3MTI3_81ciKzvADNs`,
    json: true
}, (error, response, body) =>{
    if(error){
        callback('Unable to connect to Google network.');
    } else if(body.status === 'ZERO_RESULTS'){
        callback(`Unable to find the address: ${address}`)
    } else if (body.status === 'OK') {
        callback(undefined, {
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longtitude: body.results[0].geometry.location.lng
        })
        // console.log(`Address: ${body.results[0].formatted_address}`);
        // console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        // console.log(`Longtitude: ${body.results[0].geometry.location.lng}`);

    }
})

module.exports.geocodeAddress = geocodeAddress;