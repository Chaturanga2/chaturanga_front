export type Logo = {
  logo: {
    image: string;
    alt: string;
  };
};

export type Navbar = {
  navbar: {
    navbar_bg: string;
    nav_bar_color: string;
  };
};

export type Theme = {
  theme: {
    logo: Logo;
    navbar: Navbar;
    sub_color: string;
  };
};
