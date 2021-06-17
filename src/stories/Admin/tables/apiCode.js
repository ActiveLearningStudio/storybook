export const ApiCode = `
const deleteLmsProject = (id) => httpService
  .remove('{apiVersion}/lms-settings/{id}')
  .then(({ data }) => data)
  .catch((err) => {
    Promise.reject(err.response.data);
  });
`
