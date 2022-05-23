class CityItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set city(city) {
        this._city = city;
        this.render();
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
             .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                color: #07abad;
                text-align: center;
                margin-top: 100px;
                padding: 24px;
                top: 20%;
                left: 50%;
                font-weight: bold;
            }
        </style>
        `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this.shadowDOM.innerHTML = `
        <style>
        .container{
            width: 300px;    
            background-color: #16dbde;
            
            display: block;
            margin: 0 auto;
            margin-top: 120px;
            
            border-radius: 10px;
            padding-bottom : 10px;
        }
        
        .app-title{
            width: 300px;
            height: 50px;
            border-radius: 10px 10px 0 0;
        }
        
        .app-title p{
            text-align: center;
            padding: 15px;
            margin: 0 auto;
            font-size: 1.2em;
            color: #293251;
            background-color: #07abad;
        }
        
        .notification{
            background-color: #f8d7da;
            display: none;
        }
        
        .notification p{
            color: #721c24;
            font-size: 1.2em;
            margin: 0;
            text-align: center;
            padding: 10px 0;
        }
        
        .weather-container{
            width: 300px;
            height: 260px;
            background-color: #16dbde;
        }
        
        .weather-icon{
            width: 300px;
            height: 128px;
        }
        
        .weather-icon img{
            display: block;
            margin: 0 auto;
        }
        
        .temperature-value{
            width: 300px;
            height:60px;
        }
        
        .temperature-value p{
            padding: 0;
            margin: 0;
            color: #293251;
            font-size: 4em;
            text-align: center;
            cursor: pointer;
        }
        
        .temperature-value p:hover{
            
        }
        
        .temperature-value span{
            color: #293251;
            font-size: 0.5em;
        }
        
        .temperature-description{
            
        }
        
        .temperature-description p{
            padding: 8px;
            margin: 0;
            color: #293251;
            text-align: center;
            font-size: 1.2em;
        }
        
        .location{
            
        }
        
        .location p{
            margin: 0;
            padding: 0;
            color: #293251;
            text-align: center;
            font-size: 0.8em;
        }        
        </style>
        <div class="container">
            <div class="app-title">
                <p>${this._city.weather[0]["main"]}</p>
            </div>
            <div class="notification"> </div>
            <div class="weather-container">
                <div class="weather-icon">
                    <img src="https://openweathermap.org/img/wn/${this._city.weather[0]["icon"]}@2x.png" alt="">
                </div>
                <div class="temperature-value">
                    <p>${Math.round(this._city.main.temp)}°<span>C</span></p>
                </div>
                <div class="temperature-description">
                    <p>${this._city.weather[0]["description"]}</p>
                </div>
                <div class="location">
                    <p>${this._city.name}, ${this._city.sys.country}</p>
                </div>
            </div>
        </div>`;
    }
}

customElements.define("city-item", CityItem);