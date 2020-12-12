import http from "./httpService";
import { api } from "../config.json";

const { localhost, version } = api.milkyway;

let apiEndpoint = `${localhost}/api/${version}`;

export async function register(user) {
  return http.post(apiEndpoint + '/auth/signup', {
    email: user.email,
    password: user.password,
    userType: user.userType === "sellgas" ? 2000 : 3000,
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber,
  });
}

export  async function signin(user) {
  return http.post(apiEndpoint + '/auth/signin', {
    phoneNumber: user.phoneNumber,
    password: user.password
  })
}

export async function resetpassword(phoneNumber) {
  return http.post(apiEndpoint + '/auth/reset-password', {
    phoneNumber: phoneNumber
  })
}

export async function passwordreset(phoneNumber, token, password) {
  return http.post(apiEndpoint + '/auth/password-reset', {
    phoneNumber,
    token,
    password
  })
}

export async function verifyOTP(otpData) {
  return http.post(apiEndpoint + '/otp/verify', {
    phoneNumber: otpData.phoneNumber,
    token: otpData.token,
    actionType: otpData.actionType
  });
}