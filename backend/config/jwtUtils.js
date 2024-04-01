import jwt from 'jsonwebtoken';
import { secretKey } from "./jwtConfig.js";

export const generateToken = (user) => {
    const payload = {
        id: user._id,
        email: user.email
    }
    return jwt.sign(payload, secretKey, { expiresIn: '1h'});
}