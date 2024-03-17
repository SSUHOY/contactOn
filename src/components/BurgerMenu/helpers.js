export const handleLogOutUser = (e) => {
  if (e.key === "3") {
    localStorage.clear("userData");
    return;
  }
};
