import RecordsData from '../Records/RecordsData.json'




export const loadPost = (postId) => {
    return RecordsData.get("/posts/" + postId).then((reponse) => reponse.data);
}