import { Menace } from '../models';

class MenaceController {
    async index(req,res) {

        const menaces = await Menace.findAll({ attributes: { exclude: ['createdAt', 'updatedAt']}})

        res.json( menaces );
    }

    async detail(req, res, next) {
        const id = req.params.id;
        let menace = null;

        try {
            menace = await Menace.findOne({
                where: { id },
                attributes: {exclude: ['createdAt', 'updatedAt']}
            });

            if(!menace) {
                next({ status: 404, message: "Cette ressource n'existe pas."});
                return;
            }
        } catch(e) {
            next({ status: 500, message: e.message });
            return;
        }
        res.json(menace);
    }

    async add(req,res,next) {
        const body = req.body;

        try {
            const menace = await Menace.create( body );
            res.status(201).json(menace);
        } catch(e) {
            next({ status: 500, message: e.message});
        }
    }

    async edit(req,res,next) {
        const id = req.params.id;
        const body = req.body;

        try {
            await Menace.update( body, { where: { id }});
            res.status(204).json();
        } catch(e) {
            next({ status: 500, message: e.message});
        }
    }

    async delete(req,res,next) {
        const id = req.params.id;

        try {
            const deleted = await Menace.destroy({ where: { id }});
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

export default new MenaceController