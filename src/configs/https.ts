import errorHandler from "./errorHandler";
export const BASE_URL = "https://api.punkapi.com/v2";

const instance = {
  get: async (url: string) => {
    try {
      const response = await fetch(BASE_URL + url);
      const data = await response.json();
      return data;
    } catch (error) {
      errorHandler(error);
      throw error;
    }
  },

  getParams: async (url: string, params: any) => {
    try {
      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(BASE_URL + url + "?" + queryString, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      errorHandler(error);
      throw error;
    }
  },
};

export default instance;
