// open json file
export function getUsers() {
  const axios = window.axios;
  return axios.get("../data/data.json").then((response) => {
    return response.data;
  });
}
