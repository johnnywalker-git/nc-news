import axios from "axios";

export const getAllArticles = () => {
   return axios.get('https://nc-news-3sba.onrender.com/api/articles').then((response) => {
    return response.data
   })
}

export const  getSelectedArticle = (id) => {
   return axios.get(`https://nc-news-3sba.onrender.com/api/articles/${id}`).then((response) => {
      return response.data.finishedArticle
   })
}

export const getArticleComment = (id) => {
   return axios.get(`https://nc-news-3sba.onrender.com/api/articles/${id}/comments`).then((response) => {
      return response.data
   })
}

