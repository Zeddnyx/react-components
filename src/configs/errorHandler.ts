export default function errorHandler(error: any) {
  if (error) {
    if (error.response) {
      console.log(error.response?.data.message);
      return Promise.reject(error);
    }
  }
}
