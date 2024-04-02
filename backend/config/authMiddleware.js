import jwt from 'jsonwebtoken';
import { secretKey } from './jwtConfig.js'

export const authenticateToken = (req, res, next) => {
    const authHeader = req.header("Authorization");
    if(!authHeader) {
        return res.status(401).json({ message: "Missing Token!" });
    }
    let [bearer, token] = authHeader.split(" ");
    token = token.replace(/"/g, '');

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

export const authenticateDonorToken = (req, res, next) => {
    const authHeader = req.header("Authorization");
    if(!authHeader) {
        return res.status(401).json({ message: "Missing Token!" });
    }
    let [bearer, token] = authHeader.split(" ");
    token = token.replace(/"/g, '');

    if(bearer != "Bearer" || !token) {
        return res.status(401).json({ message: "Invalid token format!" });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
          console.log(err);
            return res.status(403).json({ message: "Invalid token!" });
        }
        if(user.role === 'donor'){
            req.user = user;
        } else {
            return res.status(403).json({ message: "Access Forbidden!" });
        }
        next();
    });
}

export const authenticateNgoToken = (req, res, next) => {
    const authHeader = req.header("Authorization");
    if(!authHeader) {
        return res.status(401).json({ message: "Missing Token!" });
    }
    let [bearer, token] = authHeader.split(" ");
    token = token.replace(/"/g, '');

    if(bearer != "Bearer" || !token) {
        return res.status(401).json({ message: "Invalid token format!" });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token!" });
        }
        if(user.role === 'ngo'){
            req.user = user;
        } else {
            return res.status(403).json({ message: "Access Forbidden!" });
        }
        next();
    });
}

export const authenticateAgencyToken = (req, res, next) => {
    const authHeader = req.header("Authorization");
    if(!authHeader) {
        return res.status(401).json({ message: "Missing Token!" });
    }
    let [bearer, token] = authHeader.split(" ");
    token = token.replace(/"/g, '');

    if(bearer != "Bearer" || !token) {
        return res.status(401).json({ message: "Invalid token format!" });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token!" });
        }
        if(user.role === 'compostAgency'){
            req.user = user;
        } else {
            return res.status(403).json({ message: "Access Forbidden!" });
        }
        next();
    });
}