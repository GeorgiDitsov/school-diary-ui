import HttpRequest from "../utils/httpRequest";
import { API_URL, HOME_PATH } from "../utils/url";
import { setTokenCookie } from "../utils/cookie";
import cookie from "react-cookies";
import { TOKEN_COOKIE_NAME } from "../utils/constants";

const AuthenticationService = {
  handleLogin: async (body) => {
    try {
      const response = await HttpRequest.post(`${API_URL}/authenticate`, body);

      if (response.ok) {
        const token = await response.json();
        setTokenCookie(token);
        window.document.location.replace(HOME_PATH);
      } else {
        const error = await response.text();
        throw new Error(error);
      }
    } catch (error) {
      alert(error);
    }
  },

  handleLogout: () => {
    cookie.remove(TOKEN_COOKIE_NAME);
    return true;
  },

  getAuthenticatedUser: async () => {
    const response = await HttpRequest.get(`${API_URL}/authenticated-user`);

    if (response.ok) return await response.json();
  },
};

export default AuthenticationService;
