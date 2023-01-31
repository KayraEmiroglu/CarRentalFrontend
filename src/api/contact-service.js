import axios from "axios"

const API_URL = settings.API_URL;



export const sendMessaage = (message)=>{
   return axios.post(`${API_URL}/contactmessage/visitors`, message)
}