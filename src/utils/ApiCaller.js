import Axios from 'axios';
import objecAssign from 'object-assign';

export const request = (endpoint, method, params = {}, body = {}) => {
  return Axios({
    url: endpoint,
    method: method,
    params: objecAssign(params),
    data: body,
  })
};

export const get = (endpoint, params = {}) => {
  return request(endpoint, 'GET', params);
};
