import express from 'express';
import jwt from 'jsonwebtoken';
import mysql from 'mysql2';

const app = express();
const PORT = process.env.PORT || 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
});

connection.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL:', error);
        return;
    }
    console.log('Connected to MySQL');
});

app.get('/info', (req, res) => {
    res.json({status: 'Success', data: {1:'abcbc', 2: 'anncn'}});
});

app.post('login/', (req, res) => {

});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});