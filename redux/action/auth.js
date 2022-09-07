import axios from '../../helper/axios';

export const login = (data) => {
   return new Promise((resolve, reject) => {
      axios
         .post(`login`, data)
         .then((res) => {
            resolve(res.data);
         })
         .catch((err) => {
            reject(err);
         });
   });
};

export const register = (data) => {
   return new Promise((resolve, reject) => {
      axios
         .post('register', data)
         .then((res) => {
            resolve(res.data);
         })
         .catch((err) => {
            reject(err);
         });
   });
};
