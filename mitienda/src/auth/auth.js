import axios from "axios";

const URL=" http://localhost:3000/users";

export default{
    register(email,password){
        const user = {
            email,password
        }
        return axios.post(URL,user);
    },
    login(email,password){
        return axios.get(URL+"?email="+email+"&password="+password);
    }
}