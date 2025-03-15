// https://api.unsplash.com/
// ?client_id=YOUR_ACCESS_KEY
// page
// per_page
// V9s52oULpu8WRWv8K7pVDQOWQZRSeMxiEbTDfW1pjiw

import axios from "axios";

export const FetchImages = async (topic, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=V9s52oULpu8WRWv8K7pVDQOWQZRSeMxiEbTDfW1pjiw&query=${topic}&page=${page}&per_page=9&orientation=landscape`
  );

  const data = {
    totalPages: response.data.total_pages,
    results: response.data.results,
  };

  return data;
};
