export type User = {
    id?: number;
    first_name?: string,
    last_name?: string,
    username?: string,
    email?: string,
    password?: string,
    password_confirmation?: string,
    level?: string
};

export type UserLoginResponse = {
    message?: string;
    user?: User;
    token?: string;
    refresh_token: string;
};

export type UserStats = {
    role?: string;
    rank?: string;
    stat?: JSON;
}
