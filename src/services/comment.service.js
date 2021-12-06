import axios from "axios"
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/comment/";

class CommentService {
    getCommentsByReviewId(reviewId){
        return axios
        .get(API_URL + "all?reviewId=" + reviewId, {headers: authHeader()});
    }

    addNewComment(reviewId, userId, text){
        return axios
        .post(API_URL + "add_comment", {
            reviewId, 
            userId,
            text,
            headers: authHeader()
        });
    }
}

export default new CommentService();