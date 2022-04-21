const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');
const Voo = require('../models/voos')

router.use(authMiddleware);

router.get('/', async (req,res) => {
    try {
        const voos = await Voo.find().populate('user');
        return res.send({voos})
    } catch (error) {
        return res.status(400).send({error: 'Error to find voos'})
    }
});

router.get('/:vooId', async (req,res) => {
    try {
        const voos = await Voo.findById(req.params.vooId).populate('user');
        return res.send({voos})
    } catch (error) {
        return res.status(400).send({error: 'Error to find voos'})
    }
})

router.post('/', async (req,res) => {
    try {
        const voo = await Voo.create({...req.body, user: req.userId});
        return res.send({voo});
    } catch (err) {
        return res.status(400).send({error: 'Error creating new voo'})
    }
})

router.put('/:vooId', async (req,res) => {
    try {
        const { destino, description} = req.body;
        const voo = await Voo.findByIdAndUpdate(req.params.vooId, {
            destino,
            description
        }, { new: true});
        await voo.save();
        return res.send({voo});
    } catch (err) {
        return res.status(400).send({error: 'Error to update voo'})
    }
})

router.delete('/:vooId', async (req,res) => {
    try {
        await Voo.findByIdAndRemove(req.params.vooId);
        return res.send();
    } catch (error) {
        return res.status(400).send({error: 'Error deleting voo'})
    }
})

module.exports = app => app.use('/voos', router);