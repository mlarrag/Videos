import axios from 'axios';


const KEY = 'AIzaSyASWYNcwBGtW03oTtJClVeXXO0Nno4pFo0';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

