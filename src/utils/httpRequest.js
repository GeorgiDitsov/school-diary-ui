import { getTokenCookie } from "./cookie";

const HttpRequest = {
  get: async (url) => {
    return await fetch(url, {
      method: "GET",
      headers: {
        Authorization: getTokenCookie(),
      },
    }).catch((error) => alert(error));
  },
  post: async (url, requestBody) => {
    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getTokenCookie(),
      },
      body: JSON.stringify(requestBody),
    }).catch((error) => alert(error));
  },
  put: async (url, requestBody) => {
    return await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: getTokenCookie(),
      },
      body: JSON.stringify(requestBody),
    }).catch((error) => alert(error));
  },
  patch: async (url, requestBody) => {
    return await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: getTokenCookie(),
      },
      body: JSON.stringify(requestBody),
    }).catch((error) => alert(error));
  },
  delete: async (url) => {
    return await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: getTokenCookie(),
      },
    }).catch((error) => alert(error));
  },
};

export default HttpRequest;
