// import RecordsData from '../Pages/BlogList.json'

export const loadPost = (blogId) => {
    return ("/post/" + blogId).then((response) => response.blogId);
};


// export const loadPost = (postId) => {
//     return RecordsData.get("/posts/" + postId).then((reponse) => reponse.data);
// }