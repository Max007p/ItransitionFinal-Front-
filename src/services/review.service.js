import axios from "axios"
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/review/";

class ReviewService {
    getPopularReviews(quantity){ 
        return axios.get(API_URL + "popular?quantity=" + quantity);
    }

    getLatestReviews(quantity){
        return axios.get(API_URL + "latest?quantity=" + quantity);
    }

    getFilteredReviews(text){
        return axios.get(API_URL + "filter?text=" + text);
    }

    getUsersReviewsList(userId){
        return axios.get(API_URL + "my_reviews?userId=" + userId, {headers: authHeader()});
    }

    getReviewById(reviewId){
        return axios.get(API_URL + reviewId);
    }
}

export default new ReviewService();
