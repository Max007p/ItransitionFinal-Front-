import axios from "axios"


const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
    login(name, password){
        return axios
        .post(API_URL + "signin", {
            name, 
            password
        })
        .then(response => {
            if (response.data.token){
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response;
        })
    }

    logout(){
        localStorage.removeItem("user");
    }

    register(name, password){
        return axios.post(API_URL + "signup", {
            name,
            password
        })
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();