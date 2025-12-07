import Jwt from "jsonwebtoken";
import { envConfig } from "../config/config";

const generateToken = (userId: string) => {
  //generate Token (jwt)

  const token = Jwt.sign({ userId }, envConfig.jwtSecretKey as string, {
    expiresIn: envConfig.jwtExpiresIn,
  });
  return token;
};
export default generateToken;
