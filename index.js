import 'dotenv/config'
import express from 'express'
import router from './router/router.js';
import middleware from './middleware/errorHandler.js'

const app = express();
const port = process.env.PORT || 5001;
app.use(express.json());
app.use('/user',router)
app.use(middleware.errorHandler)
app.use(middleware.notFound)

app.listen(port, ()=>{
    console.log(`Server Connection On ${port}`);
})