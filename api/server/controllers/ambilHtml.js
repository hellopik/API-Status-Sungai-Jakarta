const axios = require("axios").default;

const ambilHtml = async url => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch {
      console.error(
        `ERROR: An error occurred while trying to fetch the URL: ${url}`
      );
    }
  };

export default ambilHtml;