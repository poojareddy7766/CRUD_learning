// import express module
import express from 'express';
//creates a router instance
const router = express.Router();
//mock data
const users = [
    {
      firstName: 'Pooja',
      lastName: 'reddy',
      email: 'poojareddy@gmail.com',
    },
    {
      firstName: 'John',
      lastName: 'Cena',
      email: 'JonCena@example.com',
    },
  ];
// get it from the same file and send 
  router.get('/', (req, res) => {
    res.send(users);
})
// export it
export default router