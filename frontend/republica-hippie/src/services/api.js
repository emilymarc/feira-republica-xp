import axios from 'axios';
import { toast } from 'react-toastify'

export const baseUrl = axios.create({
  baseURL: "http://localhost:4000",
})

//Products
export const getProductsByCategory = async (category) => {
  try {
    return await baseUrl.get(`/products/categories${category}`)
  } catch (error) {
    toast.warn(`Erro ao carregar os produtos: ${error.response.data}`)
  }
}

export const getProductsById = async (id) => {
  try {
    return await baseUrl.get(`/products/${id}`)
  } catch (error) {
    toast.warn(`Erro ao carregar os produtos: ${error.response.data}`)
  }
}

//Expositores

export const getExpositores = async () => {
  try {
    return await baseUrl.get(`/exhibitors`)
  } catch (error) {
    toast.warn(`Erro ao carregar os expositores: ${error.response.data}`)
  }
}

export const getExpositorById = async (id) => {
  try {
    return await baseUrl.get(`/exhibitors/${id}`)
  } catch (error) {
    toast.warn(`Erro ao carregar o expositor: ${error.response.data}`)
  }
}

export const getExpositorProducts = async (id) => {
  try {
    return await baseUrl.get(`/exhibitors/${id}/products`)
  } catch (error) {
    toast.warn(`Erro ao carregar os produtos do expositor: ${error.response.data}`)
  }
}