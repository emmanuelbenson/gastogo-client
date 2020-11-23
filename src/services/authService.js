import http from "./httpService";
import { api } from "../config.json";

const { host, version } = api.milkyway;
const servicePath = "auth";
const endpoint = "signup";

const apiEndpoint = `${host}/api/${version}/${servicePath}/${endpoint}`;

export async function register(user) {
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    userType: user.userType === "sellgas" ? 2000 : 3000,
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber,
  });
}
