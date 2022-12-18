import "./App.css";

export default function App() {
  return (
    <div class="App">
      <div class="weather-app">
        <form id="search-form" class="mb-3">
          <div class="row">
            <div class="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                class="form-control"
                id="city-input"
                autocomplete="off"
              />
            </div>
            <div class="col-3">
              <input
                type="submit"
                value="Search"
                class="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div class="overview">
          <h1 id="city" class="pulsate">
            Chicago
          </h1>
          <ul>
            <li>
              Currently: <span id="date">Thursday 15:10</span>
            </li>
            <li id="description">clear sky</li>
          </ul>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="clearfix weather-temperature">
              <img
                src="http://openweathermap.org/img/wn/01d@2x.png"
                alt="clear sky"
                id="icon"
                class="float-left"
              />
              <div class="float-left">
                <strong id="temperature">90</strong>
                <span class="units"> °F</span>
              </div>
            </div>
          </div>
          <div class="col-6">
            <ul>
              <li>
                Humidity: <span id="humidity">58</span>%
              </li>

              <li>
                Wind: <span id="wind">17</span> mph
              </li>
            </ul>
          </div>
        </div>
        <div class="weather-forecast" id="forecast">
          <div class="row">
            <div class="col-2">
              <div class="weather-forecast-date">Thu</div>
              <img
                src="http://openweathermap.org/img/wn/01d@2x.png"
                alt=""
                width="42"
              />
              <div class="weather-forecast-temperatures">
                <span class="weather-forecast-temperature-max"> 91° </span>
                <span class="weather-forecast-temperature-min"> 77° </span>
              </div>
            </div>

            <div class="col-2">
              <div class="weather-forecast-date">Fri</div>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                width="42"
              />
              <div class="weather-forecast-temperatures">
                <span class="weather-forecast-temperature-max"> 91° </span>
                <span class="weather-forecast-temperature-min"> 78° </span>
              </div>
            </div>

            <div class="col-2">
              <div class="weather-forecast-date">Sat</div>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                width="42"
              />
              <div class="weather-forecast-temperatures">
                <span class="weather-forecast-temperature-max"> 91° </span>
                <span class="weather-forecast-temperature-min"> 76° </span>
              </div>
            </div>

            <div class="col-2">
              <div class="weather-forecast-date">Sun</div>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                width="42"
              />
              <div class="weather-forecast-temperatures">
                <span class="weather-forecast-temperature-max"> 96° </span>
                <span class="weather-forecast-temperature-min"> 77° </span>
              </div>
            </div>

            <div class="col-2">
              <div class="weather-forecast-date">Mon</div>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                width="42"
              />
              <div class="weather-forecast-temperatures">
                <span class="weather-forecast-temperature-max"> 97° </span>
                <span class="weather-forecast-temperature-min"> 82° </span>
              </div>
            </div>

            <div class="col-2">
              <div class="weather-forecast-date">Tue</div>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                width="42"
              />
              <div class="weather-forecast-temperatures">
                <span class="weather-forecast-temperature-max"> 98° </span>
                <span class="weather-forecast-temperature-min"> 82° </span>
              </div>
              +{" "}
            </div>
          </div>
        </div>
      </div>
      <a href="https://github.com/shollid1n/weather-react.git">
        open sourced on Git Hub
      </a>{" "}
      {""}
      and{" "}
      <a href="https://guileless-sherbet-a5b851.netlify.app/">
        hosted on Netlify
      </a>
    </div>
  );
}
