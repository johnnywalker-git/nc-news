import axios from "axios";


export const getAllArticles = (sort,order) => {
   let url = 'https://nc-news-3sba.onrender.com/api/articles';

   if (sort || order) {
     url += '?'; 
     if (sort) {
       url += `sort_by=${sort}`;
     }
     if (order) {
       url += `${sort ? '&' : ''}order=${order}`;
     }
   }
   return axios.get(url).then((response) => {
    return response.data
   })
}

// export const getAllArticles = (sort, order) => {
//    return axios.get('https://nc-news-3sba.onrender.com/api/articles').then((response) => {
//     return response.data
//    })
// }

export const getTopics = () => {
   return axios.get('https://nc-news-3sba.onrender.com/api/topics').then((response) => {
    return response.data
   })
}

export const getSelectedArticle = (id) => {
   return axios.get(`https://nc-news-3sba.onrender.com/api/articles/${id}`).then((response) => {
      return response.data.finishedArticle
   })
}


export const updateArticleVotes = (id,voteObj) => {
   return axios.patch(`https://nc-news-3sba.onrender.com/api/articles/${id}`,voteObj).then((response) => {
      return response.data.article.newArticle[0].votes
})
}

export const getArticleComment = (id) => {
   return axios.get(`https://nc-news-3sba.onrender.com/api/articles/${id}/comments`).then((response) => {
      return response.data
   })
}

export const addArticleComment = (id,userComment) => {
   return axios.post(`https://nc-news-3sba.onrender.com/api/articles/${id}/comments`,userComment).then((response) => {
      return response.data.comment
   })
}

