export const ApiCode = `
const searchResult = (sendData) =>
  httpService
    .get(/{apiVersion}/search/advanced, "", sendData)
    .then(({ data }) => data)
    .catch((err) => {
      console.log(err.response.data);
      Swal.fire({
        title: "Error",
        icon: "error",
        text: err || err.message || "Server Error",
      });
    });

const advancedSearch = (sendData) =>
  httpService
    .get(/{apiVersion}/search/dashboard, "", sendData)
    .then(({ data }) => data)
    .catch((err) => {
      console.log(err.response.data);
      Swal.fire({
        title: "Error",
        icon: "error",
        text: err || err.message || "Server Error",
      });
    });
const cloneActivity = (playlistId, ActivityId) =>
  httpService
    .post(
      /{apiVersion}/playlists/{playlistId}/activities/{ActivityId}/clone
    )
    .then((res) => Swal.fire(res.data.message))
    .catch((err) => {
      if (err.response.data.errors) {
        Swal.fire(err.response.data.errors[0]);
      } else {
        Swal.fire({
          icon: "error",
          text: "Something went wrong!",
        });
      }
    });
    const cloneProject = (projectId, subOrgId) =>
  httpService
    .post(
      /{apiVersion}/suborganization/{subOrgId}/projects/{projectId}/clone
    )
    .then((res) => Swal.fire(res.data.message))
    .catch((err) => {
      if (err.response.data.errors) {
        Swal.fire(err.response.data.errors[0]);
      } else {
        Swal.fire({
          icon: "error",
          text: "Something went wrong!",
        });
      }
    });

const clonePlaylist = (projectId, playlistId) =>
  httpService
    .post(/{apiVersion}/projects/{projectId}/playlists/{playlistId}/clone)
    .then((res) => Swal.fire(res.data.message))
    .catch((err) => {
      if (err.response.data.errors) {
        Swal.fire(err.response.data.errors[0]);
      } else {
        Swal.fire({
          icon: "error",
          text: "Something went wrong!",
        });
      }
    });
`;
