let scrape;

import('../../src/aliexpressProductScraper.js').then((module) => {
    scrape = module.scrape;
    // Rest of your code that uses scrape
}).catch(err => {
    console.error("Aliexpress-product-scraper-ts Error: ", err);
    // Handle the error
});