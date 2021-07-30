export const NavLinks = [
  { title: "Home", Url: "/", children: [] },
  {
    title: "Services",
    Url: "/",
    children: [
      { title: "Development", Url: "/development" },
      { title: "Maintenence", Url: "/maintenance" },
      { title: "Content Managment", Url: "/content-management" },
    ],
  },

  { title: "Pricing", Url: "/pricing", children: [] },
  { title: "About", Url: "/about", children: [] },
];

export const footerContactLinks = [
  { title: "+44 7737078078", Url: "/" },
  { title: "hello@hellostreet.co.uk", Url: "/" },
];

export const footerPages = [
  { title: "Home", Url: "/" },
  { title: "Say Hello", Url: "/hello" },
  { title: "Terms and conditions", Url: "/" },
  { title: "Privacy Policy", Url: "/" },
];

let AllPages = [];

const pages = NavLinks.map((page, index) => {
  if (AllPages.indexOf(page) < 0) {
    AllPages.push(page);
  }

  if (page.children.length > 0) {
    page.children.map((child, i) => {
      if (AllPages.indexOf(child) < 0) {
        AllPages.push(child);
      }
    });
  }
});

export const PagesToRender = AllPages;
