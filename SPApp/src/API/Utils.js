import axios from "axios"
import { FetchData_url } from "./urls/urls"




export const FetchData= async () => {
   const response = await axios.get(FetchData_url);
   const result = response.data;
   if (result){
    return result
   }

}