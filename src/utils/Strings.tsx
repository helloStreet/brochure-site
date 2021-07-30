import road from "../images/road.jpg";
import helloblue from "../images/helloblue.jpg";
import hellowhite from "../images/hellowhite.jpg";
import chart from "../images/chartbig.png";
import smile from "../images/smile.png";
import heart from "../images/heart.png";
import spanner from "../images/spanner.png";

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
  header: { title: "websites", tagLine: "made easy" },

  textBox: {
    attrs: {
      title: "",
      heading: "Hello Street",
      body: "We are passionate about the web. We've worked with large companies, small companies, startups and well-established design agencies, our team specialise in creating responsive, engaging sites which will generate more leads and higher search engine results.",
      body2: "",
      ctaLabel: "Find out more",
      image: hellowhite,
      left: true,
      ctaLink: "/hello",
    },
  },
  textBox2: {
    attrs: {
      title: "",
      heading: "Pricing",
      body: "We know its a mindfield trying to find the right product at the right price. We offer both off the shelf and bespoke solutions to suit all your needs.",
      body2: "",
      ctaLabel: "See our prices",
      image: helloblue,
      left: false,
      ctaLink: "/pricing",
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
      body: "Whether you need a site making from scratch, up your current site just needs refreshing, we will take the stress out of it, delivering exactly what you need to grow your business. We can design, build and host your site so you don’t need to worry about a thing ",
      body2: " ",
      ctaLabel: "Get in touch",
      image: hellowhite,
      left: true,
      ctaLink: "",
    },
  },
  textBox2: {
    attrs: {
      title: "",
      heading: "",
      body: "If you already have a site but are looking for a way to make updating it easier, leave it to us. ",
      body2:
        "We can provide a range of solutions for managing your site yourself, Get in touch to find out more. ",
      ctaLabel: "Get in touch",
      image: hellowhite,
      left: false,
      ctaLink: "/hello",
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
      heading: "Updates",
      body: "We'll keep your site updated",
      body2: "",
      ctaLabel: "Get in touch",
      image: heart,
      left: true,
      ctaLink: "",
    },
  },

  textBox2: {
    attrs: {
      title: "",
      heading: "Hosting",
      body: "We can take the hassle out of web hosting. ",
      body2: "",
      ctaLabel: "Find out more",
      image: hellowhite,
      left: false,
      ctaLink: "",
    },
  },
  textBox3: {
    attrs: {
      title: "",
      heading: "Search Engine Optimization",
      body: "If your business relies on internet traffic, it’s never been more important to get high up the search listings. Whether we’re building or maintaining your site, or even if you just want to work together to improve your ranking, we have the expertise to get you noticed",
      body2: "",
      ctaLabel: "Find out more",
      image: chart,
      left: true,
      ctaLink: "",
    },
  },
  textBox4: {
    attrs: {
      title: "",
      heading: "Security",
      body: "We use industry standard security technology to keep you site and data safe.",
      body2: "",
      ctaLabel: "Find out more",
      image: hellowhite,
      left: false,
      ctaLink: "",
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
      title: "Content Management ",
      heading: "",
      body: "We can handle all of your content management. We can have scheduled content updates, one off updates or give you the keys to update your content yourself.",
      body2:
        "We use a range of technologies to set up content management including WordPress and Umbraco so depending on how your site is set up, we can make sure your sit gets what it needs, when it needs it",
      ctaLabel: "Find out more",
      image: hellowhite,
      left: false,
      ctaLink: "/hello",
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
      ctaLabel: "Get in touch",
      image: hellowhite,
      left: false,
      ctaLink: "/content-management",
    },
  },
};
export const AboutUsData = {
  header: {
    title: "About us",
    tagLine: "We offer a range of service solutions to suit your needs.",
  },
  textBox: {
    attrs: {
      title: "",
      heading: "Hello Street",
      body: "From our offices in west London, we help clients across the     county We are a dedicated team with a passion for delivering",
      body2: "",
      ctaLabel: "Get in touch",
      image: hellowhite,
      left: true,
      ctaLink: "/hello",
    },
  },
};
export const SayHelloData = {
  header: {
    title: "",
    tagLine: "",
  },
  textBox1: {
    attrs: {
      title: "Hello Street",
      heading: "Say Hello to working together",
      body: "We offer bespoke solutions to grow your web presence. We’d love to hear from you so we can work together to find the solution that fits your needs. ",
      body2: "Just fill in the form below and let us know what you need!",
      ctaLabel: "",
      image: smile,
      left: true,
      ctaLink: "",
    },
  },
};
