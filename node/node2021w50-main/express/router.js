import express from "express";
import home from './controller/HomeController';
import client from './controller/ClientController';

const router = express.Router();
export default router;

/*router.get('/', (req, res) => {
    let html = '<h1>Bienvenue sur notre application ExpressJS</h1>';

    res.send(html);
});*/

router.get('/', home.index);
router.get('/params', home.params);
router.get('/url/:id', home.url);
router.route('/form')
    .get(home.form)
    .post(home.form);

router.get('/clients', client.index);
router.route('/clients/add')
    .get(client.add)
    .post(client.add);

router.route('/clients/edit/:id')
    .get(client.edit)
    .post(client.edit);    