import axios from "axios";
import { useState } from "react";

const AuthUser = () => {
  const [loading, setLoading] = useState(false); 
  const baseURL = process.env.REACT_APP_API;

  const saveToken = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const getToken = (tokenKey) => {
    return JSON.parse(localStorage.getItem(tokenKey));
  };

  const isLogin = () => {
    const userData = getToken('user');
    return !!userData?.token; 
  };

  const logout = () => {
    localStorage.clear();
  };

  const callApi = async (apiData) => {
    const { method, api, data } = apiData;
    const defaultHeaders = {
      //"Content-Type": "application/json",
    };
    const user = getToken("user");
    if (user) {
      defaultHeaders["Authorization"] = `Bearer ${user.token}`;
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
          const formDataToSend = new FormData();
          //formDataToSend.append('file_name', data);
          for (const key in data) {
            formDataToSend.append(key, data[key]);
          }
          response = await axios.post(`${baseURL}${api}`, formDataToSend, {
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

      setLoading(false); 

      return response.data;
    } catch (error) {
      setLoading(false); 
      throw new Error("API call failed");
    }
  };

  return {
    saveToken,
    callApi,
    getToken,
    isLogin,
    logout,
    loading, 
  };
};

export default AuthUser;
