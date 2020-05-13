const users = [
  {
    id: 1,
    name: "Admin",
    role: "Admin",
    exes: null,
    password: 123,
  },
  {
    id: 2,
    name: "Zara",
    role: "user",
    exes: ["Håkon", "Fabian"],
    password: "zz1",
  },
  {
    id: 3,
    name: "Christian",
    role: "user",
    exes: ["Martine", "Madonna"],
    password: "Ch1",
  },
  {
    id: 4,
    name: "Mina",
    role: "user",
    exes: ["Gerterud", "Åshild"],
    password: "Mi1",
  },
  {
    id: 5,
    name: "Hiruth",
    role: "user",
    exes: ["Fantorangen", "Håkon"],
    password: "Hi1",
  },
];

const celebrities = [
  {
    id: 100,
    name: "Madonna",
    role: "celebrity",
    exes: ["Håkon", "Brad Pitt", "Noah", "Martin"],
  },
  {
    id: 101,
    name: "Chris Pratt",
    role: "celebrity",
    exes: ["Malin", "Chris Rock", "Noah", "Martin"],
  },
];

const newUser = {
  id: null,
  name: "",
  role: "",
  exes: [],
  password: "",
};

module.exports = {
  users,
  celebrities,
  newUser,
};
