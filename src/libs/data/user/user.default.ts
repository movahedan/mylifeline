import type { User } from "./user.types";

export const sampleUser: User = {
  firstName: "Soheil",
  lastName: "Movahedan",
  fullName: "Soheil Movahedan",
  birthday: new Date("02/09/1996"),
  profilePictureUrl: "/images/male-avatar.png",
  lifeExpectancy: 70,
  lifeEvents: [{ date: new Date("01/10/2014"), title: "Bachelor season" }],
};

export const defaultUser: User = {
  firstName: "firstName",
  lastName: "lastName",
  fullName: "firstName lastName",
  birthday: new Date("01/01/2000"),
  profilePictureUrl: "/images/male-avatar.png",
  lifeExpectancy: 70,
  lifeEvents: [{ date: new Date("01/01/2001"), title: "title" }],
};
