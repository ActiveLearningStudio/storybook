export const ApiCode = `

const login = (body) => httpService
  .post('/login', body)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const loginWithGoogle = (body) => httpService
  .post('/login/google', body)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const register = (body) => httpService
  .post('/register', body)
  .then(({ data }) => data)
  .catch((err) => {
    errorCatcher(err.response.data);
    Promise.reject(err.response.data);
  });

const confirmEmail = (body) => httpService
  .post('/verify-email', body)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const forgotPassword = (body) => httpService
  .post('/forgot-password', body)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const resetPassword = (body) => httpService
  .post('/reset-password', body)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const updateProfile = (user) => httpService
  .put(/{apiVersion}/users/{user.id}, user)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const updatePassword = (body) => httpService
  .post(/{apiVersion}/users/update-password, body)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));
  
const subscribe = () => httpService
  .post(/{apiVersion}/subscribe')
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const searchUsers = (search) => httpService
  .post(/{apiVersion}/users/search, { search })
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));


`;
