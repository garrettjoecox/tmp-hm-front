type UUID = string;

export enum UserRole {
  USER = 0,
  SUPPORTER = 1,
  MODERATOR = 2,
  ADMINISTRATOR = 3,
  DEVELOPER = 4,
}

export type User = {
  id: UUID;
  role: UserRole;
};
