
const express = require('express');
const  cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json({ extended: true }));
app.use(cors());


if (process.env.NODE_ENV === 'production') {
    // Start folder
    app.use('/', express.static(path.join(__dirname, 'client', 'dist')));

    // Handle SPA
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    })
}

const PORT = process.env.PORT || 5050;


async function start() {
    try {
         // start async function, like open DB connection
          app.listen(PORT, () =>
              console.log(`App has been started on port ${PORT} in ${process.env.NODE_ENV} mode`));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();
