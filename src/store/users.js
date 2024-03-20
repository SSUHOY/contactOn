import { makeAutoObservable } from "mobx";

class UserStore {
  users = [
    {
      id: 1,
      name: "Alice",
      age: 28,
      gender: "female",
      location: "New York",
      interests: ["traveling", "reading", "hiking"],
      friends: [
        {
          id: 2,
          name: "John",
          age: 30,
          gender: "male",
          location: "Los Angeles",
          interests: ["cooking", "music", "fitness"],
          friends: [
            {
              id: 1,
              name: "Alice",
              age: 28,
              gender: "female",
              location: "New York",
              interests: ["traveling", "reading", "hiking"],
              friends: [],
              description:
                "Passionate traveler and book lover. Always up for an adventure!",
              photo: "https://randomuser.me/api/portraits/women/1.jpg",
            },
          ],
          description:
            "Musician and fitness enthusiast. Looking for someone to share good food and great music with.",
          photo: "https://randomuser.me/api/portraits/men/2.jpg",
        },
      ],
      description:
        "Passionate traveler and book lover. Always up for an adventure!",
      photo: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      name: "John",
      age: 30,
      gender: "male",
      location: "Los Angeles",
      interests: ["cooking", "music", "fitness"],
      friends: [
        {
          id: 1,
          name: "Alice",
          age: 28,
          gender: "female",
          location: "New York",
          interests: ["traveling", "reading", "hiking"],
          friends: [],
          description:
            "Passionate traveler and book lover. Always up for an adventure!",
          photo: "https://randomuser.me/api/portraits/women/1.jpg",
        },
      ],
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
  loadUsersFromLocalStorage() {
    const usersFromStorage = localStorage.getItem("users");
    if (usersFromStorage) {
      this.users = JSON.parse(usersFromStorage);
    }
  }
  deleteLastUser() {
    this.users.pop();
  }
  saveUsersToLocalStorage() {
    localStorage.setItem("users", JSON.stringify(this.users));
    console.log(this.users);
  }
  addNewUser(newUser) {
    this.users.push(newUser);
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
