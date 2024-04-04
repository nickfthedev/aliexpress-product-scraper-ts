// import scrape from "../src/index.cjs";
const { scrape } = require("../index.cjs");

scrape("1005006437082310", {
  reviewsCount: 20,
  rating: 2,
})
  .then((productData) => {
    console.log(JSON.stringify(productData, null, 2));
  })
  .catch((error) => {
    console.error(error);
  });
