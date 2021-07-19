export const NavLinks = [
  { title: "Home", Url: "/", children: [] },
  {
    title: "Development",
    Url: "/development",
    children: [
      { title: "Design", Url: "/design" },
      { title: "Hosting", Url: "hosting" },
      { title: "CMS", Url: "content-management-system" },
    ],
  },
  {
    title: "Maintenance",
    Url: "/maintenance",
    children: [
      { title: "Design", Url: "/design" },
      { title: "Hosting", Url: "hosting" },
      { title: "CMS", Url: "content-management-system" },
    ],
  },
  { title: "Content Management", Url: "/", children: [] },
];

export const footerContactLinks = [
  { title: "+44 7737078078", Url: "/" },
  { title: "hello@hellostreet.co.uk", Url: "/" },
];

export const footerPages = [
  { title: "Home", Url: "/" },
  { title: "Get in touch", Url: "/" },
  { title: "Contact", Url: "/" },
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
