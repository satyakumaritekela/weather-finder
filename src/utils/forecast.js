const request = require("request");

const forecast = (location, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=d446be60de62c750eaa73e6f954e603d&query=${location}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degress out. It feels like " +
          body.current.feelslike +
          "degrees out. " +
          "There is a " +
          body.current.precip +
          "% chance of rain." +
          "The humidity is " +
          body.current.humidity +
          "%."
      );
    }
  });
};

module.exports = forecast;
