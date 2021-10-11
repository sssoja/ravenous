const apiKey =
  "SNVJHxfPR0i5GIoy-r4_wydu9B9WdPysTpYit-Z4L9AEkT2UyhsWCb8kQiutiuwVAWiW9-sTpRzkYK8AsgDNlyznFP-frWL1KRCwyA00Xx5ADwH9VZliYOrvHWZkYXYx";

export const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
    )
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            console.log(business);
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        }
      });
  },
};
