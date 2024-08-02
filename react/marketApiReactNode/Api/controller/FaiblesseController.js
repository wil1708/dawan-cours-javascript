import { Faiblesse } from '../models';

class FaiblesseController {
    async index(req,res) {

        const faiblesses = await Faiblesse.findAll({ attributes: { exclude: ['createdAt', 'updatedAt']}})

        res.json( faiblesses );
    }

    async detail(req, res, next) {
        const id = req.params.id;
        let faiblesse = null;

        try {
            faiblesse = await Faiblesse.findOne({
                where: { id },
                attributes: {exclude: ['createdAt', 'updatedAt']}
            });

            if(!faiblesse) {
                next({ status: 404, message: "Cette ressource n'existe pas."});
                return;
            }
        } catch(e) {
            next({ status: 500, message: e.message });
            return;
        }
        res.json(faiblesse);
    }

    async add(req,res,next) {
        const body = req.body;

        try {
            const faiblesse = await Faiblesse.create( body );
            res.status(201).json(faiblesse);
        } catch(e) {
            next({ status: 500, message: e.message});
        }
    }

    async edit(req,res,next) {
        const id = req.params.id;
        const body = req.body;

        try {
            await Faiblesse.update( body, { where: { id }});
            res.status(204).json();
        } catch(e) {
            next({ status: 500, message: e.message});
        }
    }

    async delete(req,res,next) {
        const id = req.params.id;

        try {
            const deleted = await Faiblesse.destroy({ where: { id }});
            if(deleted === 0) {
                next();
                return;
            }
            res.status(204).json();
        } catch(e) {
            next({ status: 500, message: e.message});
        }
    }
}

export default new FaiblesseController