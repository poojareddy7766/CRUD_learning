// import express module
import express from 'express';
// bodyparser- takes post body request
import bodyParser from 'body-parser'
// create app using express object
const app = express();
//define port 
const PORT = 3000
// parsing the body to json
app.use(bodyParser.json());
// listening to the port

// directing to the same file , sending the response
app.get('/', (req, res) => {
    console.log('[GET ROUTE]');
    res.send('HELLO FROM HOMEPAGE');
})
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

