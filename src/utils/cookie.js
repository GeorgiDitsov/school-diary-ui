import cookie from "react-cookies";
import { TOKEN_COOKIE_NAME } from "../utils/constants";

export const getTokenCookie = () => {
  return cookie.load(TOKEN_COOKIE_NAME);
};

export const setTokenCookie = (token) => {
  cookie.remove(TOKEN_COOKIE_NAME);
  cookie.save(TOKEN_COOKIE_NAME, token.prefix + token.token, {
    expires: new Date(token.expiresAt),
    sameSite: "Lax",
    secure: true,
  });
};
