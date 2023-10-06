export const getToken = () => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  return token || null;
};
