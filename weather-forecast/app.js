const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
// 1301 lombard street
const temperature = require('./geocode/temperature');

let address = '1301 lombard street';

const args = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv;

geocode.geocodeAddress(args.address, (errorMessage, results) => {
    if (errorMessage){
        console.log(errorMessage)
    } else {
        console.log(JSON.stringify(results, undefined, 2));
        temperature.temperature(results, (error2, tempResult) =>{
            if(error2){
                console.log(error2);
            } else {
                console.log(JSON.stringify(tempResult, undefined, 2));
            }
        })
    }
});

