export const ApiCode = `
const getUserProjects = () => httpService
  .get(/{apiVersion}/projects)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const getProject = (id) => httpService
  .get(/{apiVersion}/projects/{id}/playlists)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));
`;
