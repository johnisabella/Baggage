import axios from "axios";

export default {

  //using errow functions so we dont have to "bind" later

  //getting ALL bags
  getBags: (bags) => {
    return axios.get("/api/bags", bags);
  },
  //adding new bags (saveBag comes from AddEditForm)
  saveNewBag: (savebags) => {
    return axios.post("/api/bags", savebags);
  },
 //adding user
  saveUser: (userData) => {
    return axios.post("/api/username", userData);
  },

  userLogin: (userData) => {
    return axios.post("/api/login", userData);
  },

  //adding new item to bag
  saveNewItem: (saveItem) => {
    return axios.post("/bagitems", saveItem);
  },
  //getting ALL items
  getBagItem: (id) => {
    return axios.get("/api/bags/" + id);
  },

  // //getting all username & pw
  // getUsername: (getusernames) => {
  //   return axios.get("/api/username", usernames);
  // },
  // //creating new username & pw
  // saveNewUsername: (newuser) => {
  //   return axios.post("/api/username", newuser);
  // },
  
};

