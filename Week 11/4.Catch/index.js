const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

let data = [
    {
        name: "me",
        age: 42
    },
    {
        name: "me",
        age: 42
    }
]

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// add data
app.post('/api/data', (req, res) => {
    const newData = { ...req.body };
    data.push(newData);
    res.json(data);
});

// get data by name
app.get('/api/data/:name', (req, res) => {
    const found = data.some(item => item.name === req.params.name);
    if (found) {
        res.json(data.filter(item => item.name === req.params.name));
    }
    else {
        res.status(400).json({ msg: `no data with name: ${req.params.id}` })
    }
});

// update
app.put('/api/data/:name', (req, res) => {
    const found = data.some(item => item.name === req.params.name);
    if (found) {
        data.forEach((item, i) => {
            if (item.name === req.params.name) {
                const updItem = { ...item, ...req.body };
                data[i] = updItem;
                res.json({ msg: 'Member updated', updItem });
            }
        });
    }
    else {
        res.status(400).json({ msg: `no data with name: ${req.params.id}` })
    }
});

// delete
app.delete('/api/data/:name', (req, res) => {
    const found = data.some(item => item.name === req.params.name);
    if (found) {
        const dataNew = data.filter(item => item.name !== req.params.name);
        data = { ...dataNew };

        // data.splice(data.findIndex(item => item.name === req.params.name), 1);
        res.json(data);
    }
    else {
        res.status(400).json({ msg: `no data with name: ${req.params.id}` })
    }
});

// catch all get all data
app.get('*', (req, res) => {
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});