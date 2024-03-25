import { makeAutoObservable, toJS } from "mobx";

class UserStore {
  users = [
    {
      id: 1,
      name: "Alice",
      age: 28,
      gender: "female",
      email: "alice87xv@example.com",
      city: "New York",
      interests: ["traveling", "reading", "hiking"],
      friends: [],
      messages: [],
      receivedMessages: [],
      addToFriendsEvents: [],
      photoGallery: [],
      chats: [],
      messagesEvents: [],
      description:
        "Passionate traveler and book lover. Always up for an adventure!",
      photo: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      name: "John",
      email: "johnsmith23@example.com",
      age: 30,
      gender: "male",
      city: "Los Angeles",
      interests: ["cooking", "music", "fitness"],
      friends: [],
      messages: [],
      receivedMessages: [],
      addToFriendsEvents: [],
      photoGallery: [],
      chats: [],
      messagesEvents: [],
      description:
        "Musician and fitness enthusiast. Looking for someone to share good food and great music with.",
      photo: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      name: "Emily",
      age: 28,
      gender: "female",
      email: "Emily@example.com",
      city: "New York",
      interests: ["art", "photography", "yoga"],
      friends: [],
      messages: [],
      receivedMessages: [],
      addToFriendsEvents: [],
      photoGallery: [],
      chats: [],
      messagesEvents: [],
      description:
        "Art lover and yoga practitioner. Seeking someone to explore galleries and go on yoga retreats.",
      photo: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      name: "Michael",
      email: "Michael@example.com",
      age: 30,
      gender: "male",
      city: "Los Angeles",
      interests: ["wine tasting", "traveling", "film"],
      friends: [],
      messages: [],
      receivedMessages: [],
      addToFriendsEvents: [],
      photoGallery: [],
      chats: [],
      messagesEvents: [],
      description:
        "Wine connoisseur and film buff. Looking for a partner to travel the world and enjoy good wine.",
      photo: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      id: 5,
      name: "Michael",
      email: "Michael@example.com",
      age: 30,
      gender: "male",
      city: "Los Angeles",
      interests: ["wine tasting", "traveling", "film"],
      friends: [],
      messages: [],
      receivedMessages: [],
      addToFriendsEvents: [],
      photoGallery: [],
      chats: [],
      messagesEvents: [],
      description:
        "Wine connoisseur and film buff. Looking for a partner to travel the world and enjoy good wine.",
      photo: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      id: 6,
      name: "Serg",
      email: "Serg@example.com",
      age: 24,
      gender: "male",
      city: "Los Angeles",
      interests: ["wine tasting", "traveling", "film"],
      friends: [],
      messages: [],
      receivedMessages: [],
      addToFriendsEvents: [],
      photoGallery: [],
      chats: [],
      messagesEvents: [],
      description: "Formatting photos and testing bikes",
      photo: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      id: 5,
      name: "Mike",
      email: "Mike@example.com",
      age: 31,
      gender: "male",
      city: "Los Angeles",
      interests: ["wine tasting", "traveling", "film"],
      friends: [],
      messages: [],
      receivedMessages: [],
      addToFriendsEvents: [],
      photoGallery: [],
      chats: [],
      messagesEvents: [],
      description: "Cats and boards",
      photo: "https://randomuser.me/api/portraits/men/10.jpg",
    },
  ];
  isAuth = false;
  alreadyFriends = false;

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
  saveAuthUserData() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let authorizedUser = JSON.parse(localStorage.getItem("authorizedUser"));
    let authorizedUserData = users.find(
      (user) => user.id === authorizedUser.id
    );
    if (authorizedUserData !== -1) {
      authorizedUser[authorizedUserData] = authorizedUser;
      localStorage.setItem(
        "authorizedUser",
        JSON.stringify(authorizedUserData)
      );
    } else {
      console.error("Authorized user not found in the users list.");
    }
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
      friend.friends.push(toJS(user));
      friend.addToFriendsEvents.push(toJS(user.id));
      this.saveUsersToLocalStorage();
      this.saveAuthUserData();
      localStorage.setItem("users", JSON.stringify(this.users));
      this.alreadyFriends = true;
    } else {
      this.alreadyFriends = false;
    }
  }
  isFriends(authUserID, user) {
    let isFriend = user.friends.some((friend) => friend.id === authUserID);
    if (isFriend) {
      this.alreadyFriends = true;
    } else {
      this.alreadyFriends = false;
    }
  }
  deleteFriend(userID, friendID) {
    let user = this.users.find((user) => user.id === userID);
    let friend = this.users.find((user) => user.id === friendID);

    if (user && friend) {
      user.friends.splice(user.friends.indexOf(friend), 1);
      friend.friends.splice(user.friends.indexOf(user), 1);
      friend.addToFriendsEvents.splice(
        friend.addToFriendsEvents.indexOf(user.id),
        1
      );
      this.saveUsersToLocalStorage();
      this.saveAuthUserData();
      localStorage.setItem("users", JSON.stringify(this.users));
      this.alreadyFriends = false;
      console.log(`${user.name} and ${friend.name} are not friends now!`);
    } else {
      this.alreadyFriends = true;
    }
  }
  sendMessage(
    senderID,
    receiverID,
    messageContent,
    senderName,
    receiverName,
    senderPhoto,
    receiverPhoto,
    senderEmail,
    receiverEmail
  ) {
    let sender = this.users.find((user) => user.id === senderID);
    let receiver = this.users.find((user) => user.id === receiverID);
    if (sender && receiver) {
      const senderChats = toJS(sender);
      const receiverChats = toJS(receiver);
      let existingSendersChat = senderChats.chats.some(
        (chat) => chat.email === receiver.email
      );
      let existingReceiverChat = receiverChats.chats.some(
        (chat) => chat.email === sender.email
      );

      if (existingSendersChat && existingReceiverChat) {
        let message = {
          senderID: senderID,
          receiverID: receiverID,
          senderName: senderName,
          receiverName: receiverName,
          senderPhoto: senderPhoto,
          receiverPhoto: receiverPhoto,
          content: messageContent,
        };
        sender.messages.push(message);
        receiver.messages.push(message);
        receiver.messagesEvents.push(sender.id);
        receiver.receivedMessages.push(message);
        localStorage.setItem("users", JSON.stringify(this.users));
        this.saveUsersToLocalStorage();
        this.saveAuthUserData();
      } else {
        let newReceiverChat = {
          receiverID: receiverID,
          senderID: senderID,
          name: senderName,
          photo: senderPhoto,
          email: senderEmail,
        };
        let newSenderChat = {
          senderID: senderID,
          receiverID: receiverID,
          name: receiverName,
          photo: receiverPhoto,
          email: receiverEmail,
        };
        let message = {
          senderID: senderID,
          receiverID: receiverID,
          senderName: senderName,
          receiverName: receiverName,
          senderPhoto: senderPhoto,
          receiverPhoto: receiverPhoto,
          content: messageContent,
        };
        receiver.chats.push(newReceiverChat);
        sender.chats.push(newSenderChat);
        sender.messages.push(message);
        receiver.messages.push(message);
        receiver.messagesEvents.push(sender.id);
        receiver.receivedMessages.push(message);
        localStorage.setItem("users", JSON.stringify(this.users));
        this.saveUsersToLocalStorage();
        this.saveAuthUserData();
      }
    } else {
      return "Error! Message isn't sent.";
    }
  }
  getAuthorizedUser() {
    const authUser = JSON.parse(localStorage.getItem("authorizedUser"));
    return authUser;
  }
  saveUsersToLocalStorage() {
    const userList = localStorage.setItem("users", JSON.stringify(this.users));
    return userList;
  }
  getUserById(id) {
    const userID = this.users.find((user) => user.id === id);
    return toJS(userID);
  }
  theUserIsAuth(props) {
    this.isAuth = props;
  }
  handleLogOutUser() {
    userStore.theUserIsAuth(false);
    localStorage.clear("authorizedUser");
  }
  clearFriendsEvents(userID) {
    let user = this.users.find((user) => user.id === userID);
    user.addToFriendsEvents.splice(0, user.addToFriendsEvents.length);
    this.saveUsersToLocalStorage();
    this.saveAuthUserData();
    localStorage.setItem("users", JSON.stringify(this.users));
  }
  clearMessagesEvents(userID) {
    let user = this.users.find((user) => user.id === userID);
    user.messagesEvents.splice(0, user.messagesEvents.length);
    this.saveUsersToLocalStorage();
    this.saveAuthUserData();
    localStorage.setItem("users", JSON.stringify(this.users));
  }
  setAuthUserData(user) {
    localStorage.setItem("authorizedUser", JSON.stringify(user));
  }
  addToPhotoGallery = (fileList) => {
    const authUser = this.getAuthorizedUser();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const imgURLs = fileList.map((image) => image.thumbUrl);
    authUser.photoGallery = authUser.photoGallery.concat(imgURLs);

    let userIndex = this.users.findIndex((user) => user.id === authUser.id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...authUser };
      localStorage.setItem("users", JSON.stringify(users));
    }
    this.saveUsersToLocalStorage();
    this.setAuthUserData(authUser);
  };
  clearStorage = () => {
    localStorage.clear();
  };
}
const userStore = new UserStore();
export default userStore;
