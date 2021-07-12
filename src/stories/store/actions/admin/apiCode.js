export const ApiCode = `
const addUserInOrganization = (user, subOrgId) => httpService
  .post(/{apiVersion}/suborganizations/{subOrgId}/add-new-user, user)
  .then(({ data }) => data)
  .catch((err) => {
    errorCatcher(err.response.data);
    Promise.reject(err.response.data);
  });
  const editUserInOrganization = (user, subOrgId) => httpService
  .put(/{apiVersion}/suborganizations/{subOrgId}/update-user-detail, user)
  .then(({ data }) => data)
  .catch((err) => {
    errorCatcher(err.response.data);
    Promise.reject(err.response.data);
  });
  const getActivityTypes = (query) => httpService
  .get(/{apiVersion}/activity-types?query={query})
  .then(({ data }) => data)
  .catch((err) => {
    errorCatcher(err.response.data);
    Promise.reject(err.response.data);
  });
  const getUserReport = (mode, size, page, query) => httpService
  .get(/{apiVersion}/users/report/basic{mode ? ?mode={mode} : ''}{size ? &size={size} : ''}{page ? &page={page} : ''}{query ? &query={query} : ''})
  .then(({ data }) => data)
  .catch((err) => {
    errorCatcher(err.response.data);
    Promise.reject(err.response.data);
  });
  export const getJobListing = (filter, size, page, query) => async (dispatch) => {
  const result = await adminService.getJobListing(filter, size, page, query);
  dispatch({
    type: actionTypes.GET_JOBS_LISTING,
    payload: result,
  });
  return result;
};

export const retryAllFailedJobs = () => async (dispatch) => {
  const result = await adminService.retryAllFailedJobs();
  dispatch({
    type: actionTypes.RETRY_ALL_FAILED_JOBS,
    payload: result,
  });
  return result;
};

export const retrySpecificFailedJob = (job) => async (dispatch) => {
  const result = adminService.retrySpecificFailedJob(job);
  dispatch({
    type: actionTypes.RETRY_FAILED_JOB,
    payload: result,
  });
  return result;
};

export const forgetAllFailedJobs = () => async (dispatch) => {
  const result = await adminService.forgetAllFailedJobs();
  dispatch({
    type: actionTypes.FORGET_ALL_FAILED_JOBS,
    payload: result,
  });
  return result;
};
  
`;
