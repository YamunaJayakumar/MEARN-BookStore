import commonAPI from "./commonAPI.JS"
import serverURL from "./serverURL"

//register api-called by auth component when register btn clicked
export const registerAPI=async(userDetails)=>{
   return await commonAPI('POST',`${serverURL}/register`,userDetails)
}