export const getAuthError = ({ auth }) => auth.error || {};
export const isAuth = ({ auth }) => auth.isLogin;
export const getUser = ({ auth }) => auth.user;

export const isRefreshing = ({ auth }) => auth.isRefreshing;
export const selectUserName = state => state.auth.user.name;
