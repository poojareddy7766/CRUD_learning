//  GET Request

// // import express module
// import express from 'express';
// //creates a router instance
// const router = express.Router();
// //mock data
// const users = [
//     {
//       firstName: 'Pooja',
//       lastName: 'reddy',
//       email: 'poojareddy@gmail.com',
//     },
//     {
//       firstName: 'John',
//       lastName: 'Cena',
//       email: 'JonCena@example.com',
//     },
//   ];
// // get it from the same file and send 
//   router.get('/', (req, res) => {
//     res.send(users);
// })
// // export it
// export default router

// POST Request


import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();
const users = [];
router.post('/', (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });
  console.log(users);

  res.send(`${user.firstName} added to the DB`);
})  
export default router