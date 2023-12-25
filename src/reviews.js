const { faker } = require('@faker-js/faker');

const getReview = (review) => {
  const gender = review.buyerGender === 'M' ? 'male' : 'female';
  // Note: Adjusting the faker method to the correct usage
  const displayName = faker.name.findName('', '', gender === 'male' ? 0 : 1);

  const data = {
    anonymous: review.anonymous,
    name: review.buyerName || displayName,
    displayName,
    gender,
    // Note: Adjusting the faker method to the correct usage
    country: review.buyerCountry || faker.address.countryCode(),
    rating: review?.buyerEval ? review.buyerEval / 20 : 5,
    info: review.skuInfo,
    date: review.evalDate,
    content: review.buyerFeedback,
    photos: review.images || [],
    thumbnails: review.thumbnails || [],
  };

  return data;
};

// Using dynamic import for node-fetch
async function fetchWithDynamicImport(url) {
  const { default: fetch } = await import('node-fetch');
  return fetch(url);
}

const get = async ({ productId, total, limit, filterReviewsBy = 'all' }) => {
  let allReviews = [];
  const COUNT_PER_PAGE = 20;

  let count = limit >= total ? total : limit;
  let totalPages = Math.ceil(count / COUNT_PER_PAGE);
  totalPages = totalPages > 5 ? 5 : totalPages;

  for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
    const reviewUrl = `https://feedback.aliexpress.com/pc/searchEvaluation.do?productId=${productId}&page=${currentPage}&pageSize=${COUNT_PER_PAGE}&filter=${filterReviewsBy}`;
    const reviewResponse = await fetchWithDynamicImport(reviewUrl);
    const reviewJson = await reviewResponse.json();

    const reviews = reviewJson?.data?.evaViewList || [];

    reviews.forEach((review) => {
      const data = getReview(review);
      allReviews.push(data);
    });
  }

  return allReviews;
};

module.exports = { get };
