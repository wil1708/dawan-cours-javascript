import { Product } from '../models';


class ProduitController {

    async index(req, res) {

        const products = await Product.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] }});

        res.json( products ); // array
    }

    async detail(req, res, next) {
        const id = req.params.id;
        let product = null;

        try{
            // product = await Product.findByPk(id, { attributes: { exclude: ['createdAt', 'updatedAt'] }});
            product = await Product.findOne({ 
                where: { id },
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            });

            if(!product) { // null == product
                next({ status: 404, message: "Cette ressource n'existe pas."});
                return;
            }
        } catch(e) {
            next({ status: 500, message: e.message });
            return;
        }
        
        res.json(product);
    }

    async add(req, res, next) {
        const body = req.body;
        
        try {
            const produit = await Product.create( body );
            res.status(201).json(produit);
        } catch(e) {
            next({ status: 500, message: e.message });
        }   
    }

    async edit(req, res, next) {
        const id = req.params.id;
        const body = req.body;

        try {
            await Product.update( body, { where: { id }} );
            res.status(204).json();
        } catch(e) {
            next({ status: 500, message: e.message });
        } 
    }

    async delete(req, res, next) {
        const id = req.params.id;

        try {
            const deleted = await Product.destroy({ where: { id }});

            if(deleted === 0) {
                next();
                return;
            }

            res.status(204).json();
        } catch(e) {
            next({ status: 500, message: e.message });
        }
    }

}

export default new ProduitController();