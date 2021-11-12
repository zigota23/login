import instanse from "./index";

export const userApi = {
  signup: async (payload) => {
    return await instanse.post("/users/signup", payload);
  },

  login: async(payload) =>{
    return await instanse.post("/users/login", payload)
  },

  renewToken:async (payload) =>{
    return await instanse.post("/users/renewAcessToken", payload)
  },

  logout: async() => {
    return await instanse.patch("/users/logout")
  },

  getMe: async() => {
     return  await instanse.get("/users/me")
  },

  userUpdate: async(payload) =>{
    return await instanse.patch("/users/update", payload)
  },

  userDelete: async() => {
    return await instanse.delete("/users/delete")
  },
};
