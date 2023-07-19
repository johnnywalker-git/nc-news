import axios from "axios";

export default function getAllArticles() {
   return axios.get('https://nc-news-3sba.onrender.com/api/articles').then((response) => {
    return response.data
   })
}

export const getTopics = () => {
   return axios.get('https://nc-news-3sba.onrender.com/api/topics').then((response) => {
    return response.data
   })
}



