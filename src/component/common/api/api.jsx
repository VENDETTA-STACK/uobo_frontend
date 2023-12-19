import axios from "axios";

export default axios.create({
    baseURL: "http://3.227.101.95:8000/",
    headers: {
        "Content-Type": "application/json",
    },
});