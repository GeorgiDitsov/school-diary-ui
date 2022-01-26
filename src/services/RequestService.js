import httpRequest from "../utils/httpRequest";

class RequestService {
  async getData(url) {
    const response = await httpRequest.get(url);

    if (response.ok) {
      return await response.json();
    }
  }

  async create(url, requestBody) {
    const response = await httpRequest.post(url, requestBody);

    return response.ok;
  }

  async update(url, requestBody) {
    const response = await httpRequest.put(url, requestBody);

    return response.ok;
  }

  async updateV2(url, requestBody) {
    const response = await httpRequest.patch(url, requestBody);

    return response.ok;
  }

  async delete(url) {
    const response = await httpRequest.delete(url);

    return response.ok;
  }
}

export default new RequestService();
