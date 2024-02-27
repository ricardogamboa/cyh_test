import User from "../db/models/users.js";

export default async function authenticate(email: string, password: string) {
  const user = await User.findOne({ where: { email, password }});
  return user;
}
