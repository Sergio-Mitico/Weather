fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19"
)
  .then(function (db) {
    return db.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".city-name").textContent = data.name;
    document.querySelector(".temperature").textContent = data.main.temp;
    document.querySelector(".pressure").textContent = data.main.pressure;
    document.querySelector(
      ".icon"
    ).innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;

    // http://openweathermap.org/img/wn/04n@2x.png
  });
