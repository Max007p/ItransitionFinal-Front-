import axios from "axios"

const API_URL = "http://localhost:8080/api/group/";

class GroupService {
    getAllGroups(quantity){
        return axios
        .get(API_URL + "all?quantity=" + quantity);
    }
}

export default new GroupService();