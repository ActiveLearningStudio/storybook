export const ApiCode = `
const getAll = (subOrgId) => httpService
  .get(/{apiVersion}/suborganization/{subOrgId}/teams)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const getAllSubOrganizationTeams = (subOrgId) => httpService
  .get(/{apiVersion}/suborganization/{subOrgId}/get-teams)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const create = (team, subOrgId) => httpService
  .post(/{apiVersion}/suborganization/{subOrgId}/teams, team)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const get = (id, subOrgId) => httpService
  .get(/{apiVersion}/suborganization/{subOrgId}/teams/{id})
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const update = (id, team, subOrgId) => httpService
  .put(/{apiVersion}/suborganization/{subOrgId}/teams/{id}, team)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const remove = (id, subOrgId) => httpService
  .remove(/{apiVersion}/suborganization/{subOrgId}/teams/{id})
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const inviteConfirm = (user) => httpService
  .post(/{apiVersion}/teams/invite, user)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const inviteMember = (teamId, email) => httpService
  .post(/{apiVersion}/teams/{teamId}/invite-member, { email })
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const inviteMembers = (teamId, users, note, subOrgId) => httpService
  .post(/{apiVersion}/suborganization/{subOrgId}/teams/{teamId}/invite-members, note ? { users, note } : { users })
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const removeMember = (teamId, id, email) => httpService
  .post(/{apiVersion}/teams/{teamId}/remove, { id, email })
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const addProjects = (teamId, ids) => httpService
  .post(/{apiVersion}/teams/{teamId}/add-projects, { ids })
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const removeProject = (teamId, id) => httpService
  .post(/{apiVersion}/teams/{teamId}/remove-project, { id })
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const addMembersToProject = (teamId, projectId, ids) => httpService
  .post(/{apiVersion}/teams/{teamId}/projects/{projectId}/add-members, { ids })
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const removeMemberFromProject = (teamId, projectId, id) => httpService
  .post(/{apiVersion}/teams/{teamId}/projects/{projectId}/remove-member, { id })
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));
`;
