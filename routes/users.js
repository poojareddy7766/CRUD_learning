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

// // export it
// export default router

// POST Request


import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();
let users = [];
router.post('/', (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });
  console.log(users);

  res.send(`${user.firstName} added to the DB`);
})  
  router.get('/', (req, res) => {
    res.send(users);
})
// Get a particular user based on the id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  // among te users finding the id that matches
  const foundUser = users.find((user) => user.id === id)
  res.send(foundUser)
});
// Deleting a particular user based on the id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id)
  res.send(`${id} deleted successfully from DB`);
});
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  // const { firstName, lastName, email} = req.body;
  // console.log(firstName+" "+lastName+"  "+email);
  const user = users.find((user) => user.id === id)
  if(user.firstName) user.firstName = "Pooja";
  if(user.lastName) user.lastName = "Reddy";
  if(user.email) user.email = "pooja1234@mail.com"
  res.send(`User with the ${id} is updated`)
});
export default router