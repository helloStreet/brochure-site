import road from "../images/road.jpg";
import helloblue from "../images/hellostreet/helloblue.jpg";
import hellowhite from "../images/hellostreet/hellowhite.jpg";
import chart from "../images/chartbig.png";
import chartcut from "../images/chartcut.webp";
import smile from "../images/smile.png";
import heart from "../images/heart.png";
import spanner from "../images/spanner.png";
import settings from "../images/settings.png";

export const roadHeader = road;

export const PromoBannerInfo = {
  title:
    "Not sure whats right for you or just want to find some more information?",
  ctaLabel: "Say hello",
  ctaLink: "/hello",
};

export const carouselCardInfo = [
  {
    title: "Website Maintence",
    body: "Security, SEO and updates, let us take the stress out of you site  maintenance",
    link: "/maintenance",
    image: spanner,
  },
  {
    title: "SEO",
    body: "It's never been more important to be found top of a search, we can get you there!",
    link: "/maintenance",
    image: chart,
  },
  {
    title: "Content Management",
    body: "We can make sure that your content is always up to date",
    link: "/content-managment",
    image: heart,
  },
  {
    title: "Web Development",
    body: "We can create your website, with a tech stack that suits your needs",
    link: "/development",
    image: smile,
  },
];
export const priceCardInfo = [
  {
    title: "Basic",
    price: "£29",
    body: "Find out more about how we can help keep your site secure, up to date and ",
    link: "/maintenance",
  },
  {
    title: "Middle",
    price: "£59",
    body: "It's never been more important to be found top of a search, we can get you there!",
    link: "/seo",
  },
  {
    title: "Top",
    price: "£279",
    body: "Let us keep your website content fresh",
    link: "/content-managment",
  },
  {
    title: "Super Top",
    price: "£539",
    body: "We can create your website, with a tech stack that suits your needs",
    link: "/development",
  },
];

export const homeData = {
  header: {
    title: "web services",
    tagLine: "making the internet work for you",
  },

  textBox: {
    attrs: {
      title: "",
      heading: "hello street",
      body: "At hello street we are passionate about the web. We are a team of developers who live and breathe web development. We work with a wide range of technologies to make sure that we can tailor the right solution for your business",
      body2: "",

      image: hellowhite,
      left: true,
      isCTA: false,
    },
  },
  textBox2: {
    attrs: {
      title: "",
      heading: "our services",
      body: "Whether you need a whole new website, or just tweaks and improvements to your current website, we're here to help. Got a project in mind? click here to fill in our contact form and get the ball rolling. We’re happy to set up a no obligation chat about your project and let you know what we can offer. ",
      body2: "",
      image: settings,
      left: false,
      isCTA: true,
    },
  },
};

export const developmentData = {
  header: {
    title: "development",
    tagLine: "Get your site up and running with us",
  },

  textBox: {
    attrs: {
      title: "",
      heading: "Helping businesses grow their online presence since 2020",
      body: "Whether you need a whole new website, or just tweaks and improvements to your current site, we offer a range of packages. From one off fixes and updates, to full design and build, our developers will work closely with you to ensure that your site is up and running as quickly as possible.",
      body2: " ",

      image: hellowhite,
      left: true,
      isCTA: false,
    },
  },
  textBox2: {
    attrs: {
      title: "",
      heading: "",
      body: "If you already have a site, but are looking for a way to make updating it easier, leave it to us. ",
      body2:
        "We can provide a range of solutions for managing your site yourself, Get in touch to find out more. ",

      image: spanner,
      left: false,
      isCTA: true,
    },
  },
};
export const maintenanceData = {
  header: {
    title: "maintenance",
    tagLine:
      "Updates, Hosting, SEO and Security and Security, We’ve got you covered.",
  },

  textBox1: {
    attrs: {
      title: "",
      heading: "Maintenance",
      body: "Once your site is up and running, it is important to keep it maintained. This can include security updates, functionality improvements, content management and SEO. ",
      body2:
        " We can do as little or as much of your site maintenance as you need.",

      image: helloblue,
      left: true,
      isCTA: false,
    },
  },
  textBox2: {
    attrs: {
      title: "",
      heading: "Search Engine Optimization",
      body: "Search engine optimisation, or SEO is the process of optimising your site to gain visibility through search engines. We monitor key words, links to your site and follow best practices to make sure your site is more visible to you potential clients.",
      body2:
        "If you rely on the internet for attracting new business, it’s important to make sure that you are as high up the search results as possible. ",

      image: chartcut,
      left: true,
      isCTA: false,
    },
  },
  textBox3: {
    attrs: {
      title: "",
      heading: "Security",
      body: "We use industry standard security protocols to ensure your site and data is secure. We host sites on both Amazon’s AWS and Microsoft’s Azure to utilise the outstanding security features provided by two of the world’s biggest software companies.  We also use a range of front end technologies designed with security in mind, including Gatsby/React and Razor/C#.",
      body2:
        "At hello street, we ensure security at the heart of everything we do.",

      image: hellowhite,
      left: false,
    },
  },
};
export const contentManagementData = {
  header: {
    title: "content management",
    tagLine: "Let us update your content",
  },

  textBox: {
    attrs: {
      title: " ",
      heading: "Content Management",
      body: "Content management systems make it easy for you too update your site yourself. Whether it’s changing pictures, updating products or keeping your blog fresh, we can set you up with a system that’s easy to use and leaves you with the keys to your site. ",
      body2: "",
      image: hellowhite,
      left: false,
      isCTA: false,
    },
  },
  textBox2: {
    attrs: {
      title: " ",
      heading: "",
      body: "We use a range of technologies to set up content management including WordPress, Umbraco and droopal, so depending on how your site is set up, we can make sure your site gets what it needs, when it needs it. ",
      body2: "",
      image: hellowhite,
      left: true,
      isCTA: true,
    },
  },
};
export const pricingData = {
  header: {
    title: "Price",
    tagLine: "We offer a range of service solutions to suit your needs.",
  },
  textBox: {
    attrs: {
      title: "Prices",
      heading: "",
      body: "body about Content management",
      body2: "",

      image: hellowhite,
      left: false,
      isCTA: true,
    },
  },
};
export const aboutUsData = {
  header: {
    title: "us",
    tagLine: "We offer a range of service solutions to suit your needs.",
  },
  textBox: {
    attrs: {
      title: "",
      heading: "hello street",
      body: "From our offices in west London, we help clients across the     county We are a dedicated team with a passion for delivering",
      body2: "",

      image: hellowhite,
      left: true,
      isCTA: true,
    },
  },
};
export const sayHelloData = {
  header: {
    title: "",
    tagLine: "",
  },
  textBox1: {
    attrs: {
      title: "hello street",
      heading: "Say Hello to working together",
      body: "We offer bespoke solutions to grow your web presence. We’d love to hear from you so we can work together to find the solution that fits your needs. ",
      body2: "Just fill in the form below and let us know what you need!",

      image: smile,
      left: true,
      isCTA: false,
    },
  },
};
