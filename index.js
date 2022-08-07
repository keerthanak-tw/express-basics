import express from 'express';
import router from './src/routes/index.js';

const app = express();
const port = 3000;

app.use(express.static('src/images'));

app.use('/', router);

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`);
});