import axios from 'axios';
const COUNT_API_BASE_URI = "https://5e9ed3a0fb467500166c47b3.mockapi.io/counters";

class CounterApi {
    static getCounterSize() {
        return axios.get(COUNT_API_BASE_URI);
    }
    static putCounterSize(requestBody) {
        return axios.put(COUNT_API_BASE_URI + "/1", requestBody);
    }
}

export default CounterApi;