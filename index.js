import express from 'express';

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`);
});

app.use(express.static('images'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});