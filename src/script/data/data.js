class DataSource {
    static searchCity(keyword) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${keyword}&appid=35088db80d4cc3664cd867f2451a6d3e&units=metric`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.name) {
                return Promise.resolve(responseJson);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        }) 
    }
}
export default DataSource;