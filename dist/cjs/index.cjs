let scrapePromise = import('../../src/aliexpressProductScraper.js')
    .then((module) => module.scrape)
    .catch(err => {
        console.error("Aliexpress-product-scraper-ts Error: ", err);
        throw err;
    });

module.exports = { scrapePromise };
