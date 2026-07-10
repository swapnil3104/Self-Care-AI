import axios, { type InternalAxiosRequestConfig } from 'axios';

const API_URL = 'http://localhost:8000';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = async (email: string, password: string) => {
  const form = new FormData();
  form.append("username", email);
  form.append("password", password);

  const response = await api.post('/token', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};


export const register = async (
  email: string, 
  password: string, 
  full_name: string,
  dob: string,
  gender: string,
  address: string,
  profile_image: string | null
) => {
  const res = await fetch("http://localhost:8000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      email, 
      password, 
      full_name,
      dob,
      gender,
      address,
      profile_image
    }),
  });

  if (!res.ok) {
    throw new Error("Registration failed");
  }

  return res.json();
};

export const getHistory = async () => {
  const response = await api.get('/history');
  return response.data;
};

export const getUserProfile = async () => {
  const response = await api.get('/users/me');
  return response.data;
};



export const uploadImage = async (file: string | Blob) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await api.post('/predict', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};
