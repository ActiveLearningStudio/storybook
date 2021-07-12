export const ApiCode = `
const getUserMetrics = (userId) => httpService
  .get(/{apiVersion}/users/{userId}/metrics)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const getUserMembership = (userId) => httpService
  .get(/{apiVersion}/users/{userId}/membership)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const logActivityView = (activityId) => httpService
  .get(/{apiVersion}/activities/{activityId}/log-view);

const logPlaylistView = (playlistId) => httpService
  .get(/{apiVersion}/playlists/{playlistId}/log-view);

const logProjectView = (projectId) => httpService
  .get(/{apiVersion}/projects/{projectId}/log-view);

const redeemOffer = (offer) => httpService
  .get(/{apiVersion}/users/me/redeem/{offer});
`;
