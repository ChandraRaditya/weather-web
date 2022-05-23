import "../component/search-bar.js";
import "../component/city-item.js";
import DataSource from '../data/data.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const cityItemElement = document.querySelector("city-item");

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchCity(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        cityItemElement.city = results;
    };

    const fallbackResult = message => {
        cityItemElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;