import { nanoid } from "nanoid";

export default () => {
  return [
    {
      id: nanoid(),
      name: "John Doe",
      age: 30,
      email: "johndoe@example.com",
    },
    {
      id: nanoid(),
      name: "Jane Smith",
      age: 25,
      email: "janesmith@example.com",
    },
  ];
};
