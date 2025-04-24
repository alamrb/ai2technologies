import { GOOGLE_KEY } from "@/Config/config";
import axios from "axios";

export const googleGETmethod = (API) => {
    return new Promise((resolve, reject) => {
        axios.get(API + GOOGLE_KEY + '&libraries=places')
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            })
    })
}