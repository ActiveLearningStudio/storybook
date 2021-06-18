export const ApiCode = `
const userSerchIndexs = (subOrgId, page, index, search) => httpService
  .get('/{apiVersion}/suborganizations/{subOrgId}/projects?page={page}&indexing={index}&query={search || ''}')
  .then(({ data }) => data)
  .catch((err) => {
    Promise.reject(err.response.data);
    Swal.fire({
      title: 'Error',
      icon: 'error',
      text: err || err.message || 'Error loading projects.',
    });
  });

`
