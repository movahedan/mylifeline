"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { getUser } from "@mylifeline/data/user";
import { Text } from "@mylifeline/ui/atoms";
import { LifeCalendar } from "@mylifeline/ui/organisms";

import type { User } from "@mylifeline/data/user";

const defaultUser: User = {
  firstName: "",
  lastName: "",
  fullName: "Loading...",
  birthday: new Date(),
  lifeExpectancy: 70,
  profilePictureUrl: "/images/male-avatar.png",
  lifeEvents: [],
};

export default function Home() {
  const [user, setUser] = useState<User>(defaultUser);

  useEffect(() => {
    getUser()
      .then((user) => setUser(user))
      .catch((error) => console.error(error));
  });

  return (
    <div className="flex items-start flex-1 p-24 mx-auto max-w-764 space-x-24">
      <aside className="flex flex-col items-center w-1/4 space-y-8">
        <Image
          width={128}
          height={128}
          src={user?.profilePictureUrl}
          alt={user?.fullName}
          className="w-128 h-128"
        />
        <Text as="span" dataTestId="username">
          {user.fullName}
        </Text>
      </aside>
      <LifeCalendar
        years={user.lifeExpectancy}
        birthday={user.birthday}
        lifeEvents={user.lifeEvents}
      />
    </div>
  );
}
