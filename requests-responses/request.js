var weather = require("weather-js");

// Options:
// search:     location name or zipcode
// degreeType: F or C

const city = process.argv[2]

console.log(city.length)

if(!isNaN(city)){
    console.log("city name cannot be number")
    return
}


if(city.length < 4){
    console.log("Min city name must be 4.")
    return
}

weather.find({
    search: city,
    degreeType: 'C'
}, function (err, data) {

    if(err){
        console.log("something went wrong", err)
        return
    }
    
    console.log(err,data)


});
