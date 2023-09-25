import { sampleUser } from "./user.default";

import type { User } from "./user.types";

export const getUser = () =>
  new Promise<User>((resolve) => resolve(sampleUser));
