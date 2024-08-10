import axios from "axios";

const AuthUser = () => {
  const baseURL = process.env.REACT_APP_API;
  const propertyImg="http://localhost/realestate/frontend-node/public/propertyImage/"
  const projectImg='http://localhost/realestate/frontend-node/public/projectImage/'
  const tempPath='http://localhost/realestate/frontend-node/public/temp/'

  const saveToken = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
  };
  
  const getToken = (tokenKey) => {
    return JSON.parse(localStorage.getItem(tokenKey)); 
  };
  

  const isLogin = () => {
    const userData = getToken('user');
    return userData;
  };

  const logout = () => {
    localStorage.clear();
  };

  const callApi = async (apiData) => {
    const { method, api, data } = apiData;
    const user = getToken("user");

    const defaultHeaders = {
      // "Content-Type": "application/json",
    };

    if (user) {
      defaultHeaders["Authorization"] = `Bearer ${user}`;
    }

    try {
      let response;
      switch (method) {
        case "GET":
          response = await axios.get(`${baseURL}${api}`, {
            headers: defaultHeaders,
          });
          break;
        case "POST":
          response = await axios.post(`${baseURL}${api}`, data, {
            headers: defaultHeaders,
          });
          break;
        case "UPLOAD":
          const imageDataToSend = new FormData();
          for (const key in data) {
            imageDataToSend.append(key, data[key]);
          }
          response = await axios.post(`${baseURL}${api}`, imageDataToSend, {
            headers: defaultHeaders,
          });
          break;
        case "DELETE":
          response = await axios.delete(`${baseURL}${api}`, {
            headers: defaultHeaders,
          });
          break;
        default:
          throw new Error("Unsupported HTTP method");
      }

      return response.data;
    } catch (error) {
      console.error("API call failed:", error);
      throw new Error("API call failed");
    }
  };

  return {
    saveToken,
    callApi,
    getToken,
    isLogin,
    logout,
    projectImg,
    propertyImg,
    tempPath
  };
};

export default AuthUser;
