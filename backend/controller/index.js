import User from '../models/user.js'

export const signup = async (req, res) => {
    try {
        let user = await User.findOne({ $or: [{ email: req.body.email }, { username: req.body.username }] });
        if (user) {
            return res.status(409).json({ error: 'User already exists!'});
        }
        
        user = await User.create(req.body);

        return res.status(201).json({ message: 'User created successfully!' });

    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ error: error.message });
    }
}

export const create_session = (req, res) => {
    if (req.user) {
        let user = {
            name: req.user.name,
            username: req.user.username,
            email: req.user.email,
            id: req.user.id
        }
        return res.status(200).json({ message: 'Successfully logged in!', user: user});
    } else {
        return res.status(401).json({ error: 'Invalid Email/Username or Password!' });
    }
};

export const logout = (req, res) => {
    req.logout(function (err) {
        if (err) {
            return res.status(401).send({error: err});
        }
        res.status(200).send({ message: 'Logged Out Successfully!' });
    });
};