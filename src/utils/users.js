const users = [];

//addUser removeuser getUser getUsersInRoom

const addUser = ({ id, username, room }) => {
  //clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //validate the data
  if (!username || !room) {
    return {
      error: "Username and Room are required!",
    };
  }

  //check for existing user
  const existingUser = users.find((user) => {
    return user.username === username && user.room === room;
  });

  //validate username
  if (existingUser) {
    return {
      error: "Username is in use!",
    };
  }
  const user = { id, username, room };
  users.push(user);
  return {
    user,
  };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => {
    return user.id === id;
  });

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  const user = users.find((user) => {
    return user.id === id;
  });

  return user;
};

const getUserInRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter((user) => user.room === room);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUserInRoom,
};
