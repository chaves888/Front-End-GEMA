import api from './axiosConfig';
const base = '/usuarios';

export default {
  getAll: (params) => api.get(base, { params }).then(r => r.data),
  getById: (id) => api.get(`${base}/${id}`).then(r => r.data),
  create: (payload) => api.post(base, payload).then(r => r.data),
  update: (id, payload) => api.put(`${base}/${id}`, payload).then(r => r.data),
  remove: (id) => api.delete(`${base}/${id}`).then(r => r.data)
};