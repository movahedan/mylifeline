export type LifeEvent = { date: Date; title: string };

export type User = {
  firstName: string;
  lastName: string;
  fullName: string;
  birthday: Date;
  profilePictureUrl: string;
  lifeExpectancy: number;
  lifeEvents: LifeEvent[];
};
