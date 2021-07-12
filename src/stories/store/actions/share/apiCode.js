export const ApiCode = `
const googleClassShare = (projectId, courseId, token) =>
  httpService
    .post(/{apiVersion}/google-classroom/projects/{projectId}/copy, {
      course_id: courseId,
      access_token: token,
    })
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));
`;
