import { makeAutoObservable, toJS } from "mobx";

class UserStore {
  users = [
    {
      id: 1,
      name: "Alice",
      age: 28,
      gender: "female",
      city: "New York",
      interests: ["traveling", "reading", "hiking"],
      friends: [],
      messages: [],
      unReadMessages: [],
      addToFriendsEvents: [],
      messagesEvents: [],
      description:
        "Passionate traveler and book lover. Always up for an adventure!",
      photo: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      name: "John",
      age: 30,
      gender: "male",
      city: "Los Angeles",
      interests: ["cooking", "music", "fitness"],
      friends: [],
      messages: [],
      unReadMessages: [],
      addToFriendsEvents: [],
      messagesEvents: [],
      description:
        "Musician and fitness enthusiast. Looking for someone to share good food and great music with.",
      photo: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  ];
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
    this.loadUsersFromLocalStorage();
  }
  addUser(user) {
    this.users.push(user);
    this.saveUsersToLocalStorage();
    this.isAuth = true;
  }
  saveNewUserData(userAuthData) {
    localStorage.setItem("authorizedUser", JSON.stringify(userAuthData));
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userIndex = this.users.findIndex((user) => user.id === userAuthData.id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...userAuthData };
      localStorage.setItem("users", JSON.stringify(users));
    }
    this.saveUsersToLocalStorage();
  }
  loadUsersFromLocalStorage() {
    const usersFromStorage = localStorage.getItem("users");
    if (usersFromStorage) {
      this.users = JSON.parse(usersFromStorage);
    }
  }
  addFriend(userID, friendID) {
    let user = this.users.find((user) => user.id === userID);
    let friend = this.users.find((user) => user.id === friendID);

    if (user && friend) {
      user.friends.push(toJS(friend));
      friend.addToFriendsEvents.push(toJS(user.id));
      friend.friends.push(toJS(user));
      localStorage.setItem("users", JSON.stringify(this.users));
      console.log(`${user.name} and ${friend.name} are now friends!`);
    } else {
      console.log("User or friend not found.");
    }
  }
  deleteFriend(userID, friendID) {
    let user = this.users.find((user) => user.id === userID);
    let friend = this.users.find((user) => user.id === friendID);

    if (user && friend) {
      user.friends.filter(friend);
      friend.friends.filter(user);
      console.log(`${user.name} and ${friend.name} are not friends now!`);
    } else {
      console.log("User or friend not found.");
    }
  }
  deleteLastUser() {
    this.users.pop();
  }
  saveUsersToLocalStorage() {
    localStorage.setItem("users", JSON.stringify(this.users));
  }
  getUserById(id) {
    return this.users.find((user) => user.id === id);
  }
  theUserIsAuth(props) {
    this.isAuth = props;
  }
}
const userStore = new UserStore();
export default userStore;
