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

  // //getting all username & pw
  // getUsername: (getusernames) => {
  //   return axios.get("/api/username", usernames);
  // },
  // //creating new username & pw
  // saveNewUsername: (newuser) => {
  //   return axios.post("/api/username", newuser);
  // },
  // //adding new item to bag
  // saveNewItem: (saveItem) => {
  //   return axios.post("/items", saveItem);
  // }
};

  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },

