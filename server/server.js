import express from 'express';
import fs from 'fs';
import path from 'path';

const PORT = process.env.PORT || 8080;
const app = express();

app.use('^/$', (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Some error happened');
        }

        return res.send(data);
    });
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(PORT, () => {
    console.log(`App launched at ${PORT}`);
});
