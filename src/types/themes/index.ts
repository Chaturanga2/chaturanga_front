export type Logo = {
    image: string;
    alt: string;
};

export type Navbar = {
    navbar_bg: string;
    navbar_color: string;
};

export type Theme = {
    logo: Logo;
    navbar: Navbar;
    sub_color: string;
};
