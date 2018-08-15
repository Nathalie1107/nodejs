const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
// 1301 lombard street

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
    }
});
