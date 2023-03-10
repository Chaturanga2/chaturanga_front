import axiosInstance from "@/http-common";
import { User, UserLoginResponse } from "@/types/users";

class UserService {
    async login(user: User): Promise<UserLoginResponse>{
        const {data} : {data: UserLoginResponse} = await axiosInstance.post('/login', user);
        return data;
    }
}

export default new UserService();