// users service with a single method
// requests array of users from a third-party api via axios
export function getUsers() {
  const axios = window.axios;
  return axios.get("data.json").then((response) => {
    return response.data;
  });
}
