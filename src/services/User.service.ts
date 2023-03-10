import axiosInstance from "@/http-common";
import { User, UserLoginResponse, UserRegisterResponse } from "@/types/users";

class UserService {
    async login(user: User): Promise<UserLoginResponse>{
        const {data} : {data: UserLoginResponse} = await axiosInstance.post('/login', user);
        return data;
    }

    async register(user: User): Promise<UserRegisterResponse>{
        const {data} : {data: UserRegisterResponse} = await axiosInstance.post('/register', user);
        return data;
    }
}

export default new UserService();