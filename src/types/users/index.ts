
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
    token_type: string;
};

export type UserRegisterResponse = {
    message?: string;
    code?: number;
};