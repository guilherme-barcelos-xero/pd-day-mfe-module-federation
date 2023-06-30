export const hasJwtToken = () => {
  const jwtToken = localStorage.getItem("jwtToken");
  return !!jwtToken;
}

export const setJwtToken = (jwtToken: string) => {
  localStorage.setItem("jwtToken", jwtToken);
};

export const clearJwtToken = () => {
  localStorage.removeItem("jwtToken");
};