export const TOKEN_KEY = "accessToken";

export const checkToken = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const saveToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = () => {
  console.log("borrar token");
  localStorage.removeItem(TOKEN_KEY);
};
