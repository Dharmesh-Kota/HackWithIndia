import jwt from 'jsonwebtoken';
import { secretKey } from './jwtConfig.js'

export const authenticateToken = (req, res, next) => {
    const authHeader = req.header("Authorization");
    if(!authHeader) {
        return res.status(401).json({ message: "Missing Token!" });
    }
    const [bearer, token] = authHeader.split(" ");
    if(bearer != "Bearer" || !token) {
        return res.status(401).json({ message: "Invalid token format!" });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token!" });
        }
        req.user = user;
        next();
    });
}