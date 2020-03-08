import axios from 'axios';

const getCosmetic = axios.get('/api/cosmetic');
const getBrand = axios.get('/api/brand');
const getEcommerce = axios.get('/api/ecommerce');
const getFavorite = axios.get('/api/cosmetic');
const getTips = axios.get('/api/cosmetic');

export {
  getCosmetic, getBrand, getEcommerce, getFavorite, getTips,
};
