export const CreateLmsApi= `
const getAllUsers = (id, name, method) => httpService
  .get('/{apiVersion}/suborganizations/{id}/member-options?query={name}&page={method}')
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));
`
