import axios from "axios";

export default function getAllArticles() {
   return axios.get('https://nc-news-3sba.onrender.com/api/articles').then((response) => {
    return response.data
   })
}

getTopics = () => {
   return axios.get('https://nc-news-3sba.onrender.com/api/articles').then((response) => {
    return response.data
   })
}

export {getTopics}