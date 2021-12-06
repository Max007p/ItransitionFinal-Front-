import axios from "axios"
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/user/";

class UserService {
    getAllUsers(){
        return axios
        .get(API_URL + "all", {headers: authHeader()});
    }

    getReviewLike(userId, reviewId){
        return axios
        .get(API_URL + "get_review_like?userId=" + userId + "&reviewId=" + reviewId, {headers: authHeader()});
    }

    getReviewRate(userId, reviewId){
        return axios
        .get(API_URL + "get_review_rate?userId=" + userId + "&reviewId=" + reviewId, {headers: authHeader()});
    }

    addNewReview(userId, reviewId, reviewRating, title, text, reviewGroups, reviewTags){
        return axios
        .post(API_URL + "add_review", {
            userId, 
            reviewId,
            reviewRating, 
            title,
            text, 
            reviewGroups,
            reviewTags,
            headers: authHeader()
        });
    }

    updateReview(userId, reviewId, reviewRating, title, text, reviewGroups, reviewTags){
        return axios
        .post(API_URL + "update_review", {
            userId, 
            reviewId,
            reviewRating, 
            title,
            text, 
            reviewGroups,
            reviewTags
        }, {headers: authHeader()});
    }

    updateReviewLike(userId, reviewId){
        return axios
        .post(API_URL + "update_review_like", {
            userId, 
            reviewId,
            headers: authHeader()
        });
    }

    updateReviewRate(userId, reviewId, userRating){
        return axios
        .post(API_URL + "update_review_rate", {
            userId, 
            reviewId,
            userRating,
            headers: authHeader()
        });
    }

    deleteReview(reviewId){
        return axios
        .delete(API_URL + "delete_review/" + reviewId, {headers: authHeader()});
    }
}

export default new UserService();