# crud_dynamoose
API CRUD developed in NodeJS with Express and dynamoose for dynamoDB

## Execute the API

```
npm start
```

URL
```
localhost:3000
```

Si se quiere añadir mensajes personalizados a los metodos de los controladores, aquí un ejemplo:

```JS
exports.find = async (req, res) => {
    const user = await User.get(req.params.id).then(err => {
        if (err) {
            console.log(err);
            return res.status(500).json({ 'error': 'error while finding user' });
        } else {
            res.status(200).json({ 'status': 'user finded successfully' });
            return res.json(user);// view the user finded
        }
    });
};

exports.save = async (req, res) => {
    const user = await User.create(req.body).then(err => {
        if (err) {
            console.log(err);
            return res.status(500).json({ 'error': 'error while adding user' });
        } else {
            res.status(200).json({ 'status': 'user added successfully' });
        return res.json(user);// view the user added
        }
    });
};


O DE LA SIGUIENTE MANERA:


exports.find = async (req, res) => {
    const user = await User.get(req.params.id, function (err) {
        if (err) {
            console.log(err);
            return res.status(500).json({ 'error': 'error while finding user' });
        }
        res.status(200).json({ 'status': 'user finded successfully' });
        return res.json(user);// view the user finded
    });
};

exports.save = async (req, res) => {
    const user = await User.create(req.body, function (err) {
        if (err) {
            console.log(err);
            return res.status(500).json({ 'error': 'error while adding user' });
        }
        res.status(200).json({ 'status': 'user added successfully' });
        return res.json(user);// view the user added
    });
};
```