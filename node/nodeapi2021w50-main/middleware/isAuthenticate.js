import jwt from 'jsonwebtoken';

export default function isAuthenticate(req, res, next) {
    // authorization: Bearer ...token...

    if( undefined !== req.headers.authorization ){
        const token = req.headers.authorization.split(' ')[1];

        try {
            const payload = jwt.verify(token, 'commentestvotreblanquette', {
                algorithm: 'HS512'
            });
            next();
            return;
        } catch (e) {}
    }

    next({ status: 401, message: `Erreur d'authentification` });
}