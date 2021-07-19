// const path = require(`path`);
// // import PagesToRender from "./src/utils/Links";
// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions;
//   const pageTemplate = path.resolve(`./src/Templates/page-template.tsx`);

//   //   const pages = PagesToRender;

//   //   const pages = [
//   //     { title: "Development", Url: "/development" },
//   //     { title: "Design", Url: "/design" },
//   //     { title: "Hosting", Url: "hosting" },
//   //     { title: "CMS", Url: "content-management-system" },
//   //     { title: "Maintenance", Url: "/maintenance" },
//   //     { title: "Design", Url: "/design" },
//   //     { title: "Hosting", Url: "/hosting" },
//   //     { title: "Content Management", Url: "/content-managment" },
//   //     { title: "Say Hello", Url: "/hello-street" },
//   //     { title: "Terms and conditions", Url: "/t+c" },
//   //     { title: "Privacy Policy", Url: "/pp" },
//   //     { title: "Pricing", Url: "/pricing" },
//   //   ];

//   if (pages.length > 0) {
//     pages.forEach((post, index) => {
//       if (post.title !== "Footer" || post.title !== "Home") {
//         createPage({
//           path: post.Url,
//           component: pageTemplate,
//           context: {
//             id: post.id,
//           },
//         });
//       }
//     });
//   }
// };
