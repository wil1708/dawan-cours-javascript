import { Opportunite } from '../models';

class OpportuniteController {
    async index(req,res) {

        const opportunites = await Opportunite.findAll({ attributes: { exclude: ['createdAt', 'updatedAt']}})

        res.json( opportunites );
    }

    async detail(req, res, next) {
        const id = req.params.id;
        let opportunite = null;

        try {
            opportunite = await Opportunite.findOne({
                where: { id },
                attributes: {exclude: ['createdAt', 'updatedAt']}
            });

            if(!opportunite) {
                next({ status: 404, message: "Cette ressource n'existe pas."});
                return;
            }
        } catch(e) {
            next({ status: 500, message: e.message });
            return;
        }
        res.json(opportunite);
    }

    async add(req,res,next) {
        const body = req.body;

        try {
            const opportunite = await Opportunite.create( body );
            res.status(201).json(opportunite);
        } catch(e) {
            next({ status: 500, message: e.message});
        }
    }

    async edit(req,res,next) {
        const id = req.params.id;
        const body = req.body;

        try {
            await Opportunite.update( body, { where: { id }});
            res.status(204).json();
        } catch(e) {
            next({ status: 500, message: e.message});
        }
    }

    async delete(req,res,next) {
        const id = req.params.id;

        try {
            const deleted = await Opportunite.destroy({ where: { id }});
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

export default new OpportuniteController