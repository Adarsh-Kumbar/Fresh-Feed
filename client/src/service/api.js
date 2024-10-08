import axios from 'axios'

export const getNews = async() => {
    const URL = 'https://fresh-feed-server.onrender.com';
    try {
        return await axios.get(`${URL}/news`)
    } catch (error) {
        console.log('Error while calling get news api', error);
    }
}