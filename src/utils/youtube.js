import axios from 'axios'
const API_KEY = process.env.YOUTUBE_API_KEY;

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: API_KEY
    }
})