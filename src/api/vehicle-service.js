import axios from "axios"
import { settings } from "../helpers/settings";

const API_URL = settings.apiURL;



export const getVehicles = (message)=>{
   return axios.get(`${API_URL}/contactmessage/visitors`, message)
}