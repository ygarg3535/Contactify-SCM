import axios from "axios";
import UserService from "./UserService";

class ContactService{
    
    static async saveContact(userData,token){
        try{
            const response = await axios.post(`${UserService.BASE_URL}/save`, userData,
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async getContacts(token){
        try{
            const response = await axios.get(`${UserService.BASE_URL}/contacts`,
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async getContactsById(id){
        try{
            const response = await axios.get(`${UserService.BASE_URL}/contacts/${id}`,
            )
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async deleteContact(id){
        try{
            const response = await axios.delete(`${UserService.BASE_URL}/contacts/${id}`)
            return response.data;
        }catch(err){
            throw err;
        }
    }
}

export default ContactService;