import axios from 'axios';

const API_URL = "http://localhost:3000";

export function getProduct(){
  const request = axios.request({
    url: `${API_URL}/product`,
    method: "GET"
  });
  return request;
}

export function removeProduct(id){
  const request = axios.request({
    url: `${API_URL}/product/${id}/`,
    method: "DELETE"
  });
  return request;
}

export function createProduct(data){
  const request = axios.request({
    url: `${API_URL}/product/`,
    method: "POST",
    data: data
  });
  return request;
}

export function updateProduct(data){
  const request = axios.request({
    url: `${API_URL}/product/${data.id}`,
    method: "PUT",
    data: data
  });
  return request;
}