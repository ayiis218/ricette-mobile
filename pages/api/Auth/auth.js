/* import axios from 'axios';

export default function handlerLogin(req, res) {
  const { email, password } = req.body;

  axios
    .post('http://localhost:8120/login', { email, password })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      res.status(400).json({ msg: err?.response?.data });
    });
}

export default function handlerRegis(req, res) {
   const { data} = req.body;
 
   axios
     .post('http://localhost:8120/register', {data })
     .then((response) => {
       res.status(200).json(response.data);
     })
     .catch((err) => {
       res.status(400).json({ msg: err?.response?.data });
     });
 } */
