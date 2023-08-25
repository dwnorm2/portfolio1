//fix viewport change on orientation change
// if (
//   navigator.userAgent.match(/iPhone/i) ||
//   navigator.userAgent.match(/iPad/i)
// ) {
//   var viewportmeta = document.querySelector('meta[name="viewport"]');
//   if (viewportmeta) {
//     viewportmeta.content =
//       "width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0";
//     document.addEventListener(
//       "gesturestart",
//       function () {
//         viewportmeta.content =
//           "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
//       },
//       false
//     );
//   }
// }
//smooth scroll
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });
