import axiosInstance from "@/http-common";
import { User, UserLoginResponse } from "@/types/users";
import {GlobalResponse} from "@/types/GlobalResponse";

class UserService {

    async registration(user: User): Promise<GlobalResponse> {
        const { data }: { data: GlobalResponse } = await axiosInstance.post(`/auth/register`, user);
        return data;
    }

    async login(user: User): Promise<UserLoginResponse>{
        const {data} : {data: UserLoginResponse} = await axiosInstance.post('/auth/login', user);
        return data;
    }

    async getUserProfile(id: object): Promise<User> {
        const { data }: { data: User } = await axiosInstance.get(`/users/${id}`);
        return data;
    }
}

export default new UserService();
