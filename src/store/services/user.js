import instanse from "./index";

export const userApi = {
  signup: async (payload) => {
    return await instanse.post("/registration", payload);
  },

  login: async(payload) =>{
    return await instanse.post("/login", payload)
  },

  renewToken:async () =>{
    return await instanse.get("/refresh")
  },

  logout: async() => {
    return await instanse.get("/logout")
  },

  getMe: async() => {
     return  await instanse.get("/profile")
  },

  userUpdate: async(payload) =>{
    return await instanse.patch("/profile-update", payload)
  },

  userDelete: async() => {
    return await instanse.delete("/profile-delete")
  },
};
