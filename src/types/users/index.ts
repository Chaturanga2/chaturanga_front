import { routeLocationKey } from "vue-router";

export type User = {
    id?: number;
    username?: string;
    email?: string;
    password?: string;
    confirmed?: boolean;
    phone?: string;
    is_off?: boolean;
    role?: string;
};

export type UserLoginResponse = {
    message?: string;
    user?: User;
    token?: string;
    refresh_token?: string;
};

export type UserStats = {
    role?: string;
    rank?: string;
    stat?: JSON;
}