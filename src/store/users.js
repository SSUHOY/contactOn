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
      addToFriendsEvents: [],
      photoGallery: [
        "https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg",
        "https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg",
      ],
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
      addToFriendsEvents: [],
      photoGallery: [
        "https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=600",
        "https://source.unsplash.com/random/350x450",
      ],
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
      addToFriendsEvents: [],
      photoGallery: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRjiOWJ_qJAuXSC1pAWGJcqunLp2_noXM3vPQDq6xvxRsA5o1zRe_l_xhG5_ZT7WZKTKM&usqp=CAU",
        "https://media.4-paws.org/c/f/0/6/cf065689b6f82a397b40846d88b622ba5068de84/VIER%20PFOTEN_2016-07-08_011-4993x3455.jpg",
      ],
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
      interests: ["walking", "codding", "films"],
      friends: [],
      messages: [],
      addToFriendsEvents: [],
      photoGallery: [
        "https://media.gettyimages.com/id/1361767161/photo/cat-meowing-yawning-laughing-with-rose-gold-pink-background.jpg?s=612x612&w=gi&k=20&c=DvDSx7PekVWKtfvjuW1NuBn8MhXx_IrHGrKLwXAMG_I=",
        "https://baconmockup.com/300/400",
      ],
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
      interests: ["cats", "skiis", "skate"],
      friends: [],
      messages: [],
      addToFriendsEvents: [],
      photoGallery: [
        "https://static01.nyt.com/images/2023/12/12/climate/12cli-cats/12cli-cats-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
        "https://www.placebear.com/400/500",
      ],
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
      addToFriendsEvents: [],
      photoGallery: [
        "https://www.placebear.com/400/500",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTGE1GmDUNwA0CPIQ_EaUHRfurrS8QVIx9l4UNKCnZQqXRPfxNafdnEeTq_j03htpMptY&usqp=CAU",
      ],
      chats: [],
      messagesEvents: [],
      description: "Formatting photos and testing bikes",
      photo: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      id: 7,
      name: "Mike",
      email: "Mike@example.com",
      age: 31,
      gender: "male",
      city: "Los Angeles",
      interests: ["food", "traveling", "snowboarding"],
      friends: [],
      messages: [],
      addToFriendsEvents: [],
      photoGallery: [
        "https://www.picsum.photos/id/237/200/300",
        "https://source.unsplash.com/random/250x350",
      ],
      chats: [],
      messagesEvents: [],
      description: "Snowboarding is my love",
      photo: "https://randomuser.me/api/portraits/men/19.jpg",
    },
    {
      id: 8,
      name: "John",
      email: "John@example.com",
      age: 31,
      gender: "male",
      city: "Los Angeles",
      interests: ["wine tasting", "traveling", "film"],
      friends: [],
      messages: [],
      addToFriendsEvents: [],
      photoGallery: [
        "https://www.picsum.photos/id/237/200/300",
        "https://source.unsplash.com/random/250x350",
      ],
      chats: [],
      messagesEvents: [],
      description: "Cats and boards, written and books",
      photo: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: 9,
      name: "Jimm",
      email: "Jimm@example.com",
      age: 31,
      gender: "male",
      city: "New York",
      interests: ["wine tasting", "traveling", "film"],
      friends: [],
      messages: [],
      addToFriendsEvents: [],
      photoGallery: [
        "https://www.picsum.photos/id/237/200/300",
        "https://source.unsplash.com/random/250x350",
      ],
      chats: [],
      messagesEvents: [],
      description: "Love bikes and skate",
      photo: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
      id: 10,
      name: "Mike",
      email: "Mike@example.com",
      age: 31,
      gender: "male",
      city: "Los Angeles",
      interests: ["wine tasting", "traveling", "film"],
      friends: [],
      messages: [],
      addToFriendsEvents: [],
      photoGallery: [
        "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg",
        "https://source.unsplash.com/random/250x350",
      ],
      chats: [],
      messagesEvents: [],
      description:
        "Welcome to the amazing page where dreams and reality meet! Let yourself be captivated and amazed by every corner of this page, where every element carries a piece of magic. Let's create an unforgettable experience together that will leave a mark on your heart and soul!",
      photo: "https://randomuser.me/api/portraits/men/20.jpg",
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
      return (this.users = JSON.parse(usersFromStorage));
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
    return isFriend;
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
    receiverEmail,
    userID
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
          unread: true,
        };
        sender.messages.push(message);
        receiver.messages.push(message);
        receiver.messagesEvents.push(sender.id);
        localStorage.setItem("users", JSON.stringify(this.users));
        this.saveUsersToLocalStorage();
        this.saveAuthUserData();
      } else {
        let newReceiverChat = {
          chatID: receiver.chats.length + 1,
          receiverID: receiverID,
          senderID: senderID,
          name: senderName,
          photo: senderPhoto,
          email: senderEmail,
          userID: userID,
        };
        let newSenderChat = {
          chatID: sender.chats.length + 1,
          senderID: senderID,
          receiverID: receiverID,
          name: receiverName,
          photo: receiverPhoto,
          email: receiverEmail,
          userID: userID,
        };
        let message = {
          senderID: senderID,
          receiverID: receiverID,
          userID: userID,
          senderName: senderName,
          receiverName: receiverName,
          senderPhoto: senderPhoto,
          receiverPhoto: receiverPhoto,
          content: messageContent,
          unread: true,
        };
        receiver.chats.push(newReceiverChat);
        sender.chats.push(newSenderChat);
        sender.messages.push(message);
        receiver.messages.push(message);
        receiver.messagesEvents.push(sender.id);
        localStorage.setItem("users", JSON.stringify(this.users));
        this.saveUsersToLocalStorage();
        this.saveAuthUserData();
      }
    } else {
      return "Error! Message isn't sent.";
    }
  }
  updateUserMessages(userID, updatedMessages) {
    let user = toJS(this.users.find((user) => user.id === userID));

    if (user) {
      const userIndex = this.users.findIndex((el) => el.id === userID);
      this.users[userIndex] = { ...user, messages: updatedMessages };
      console.log(toJS(this.users));
      this.saveUsersToLocalStorage();
      this.saveAuthUserData();
    } else {
      console.error("User not found!");
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
  // // clearMessagesEvents(userID) {
  // //   const authUser = this.getAuthorizedUser();
  // //   let user = authUser.messagesEvents.find((user) => user.id === userID);
  // //   const deleteUser = user.messagesEvents.filter((item) => item !== 13);
  // //   console.log(
  // //     "🚀 ~ UserStore ~ clearMessagesEvents ~ deleteUser:",
  // //     deleteUser
  // //   );

  //   this.saveUsersToLocalStorage();
  //   this.saveAuthUserData();
  //   localStorage.setItem("users", JSON.stringify(this.users));
  // }
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
