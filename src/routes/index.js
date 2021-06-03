const express = require('express'); 
const router = express.Router();
const model = require('../models/task')();

const Task = require('../models/task');

//Rutas
router.get('/', async (req, res) => {
    const Datos = await Task.find();
    console.log('Datos');
    res.render('index', {
        Datos
    });
});

router.post('/add', async (req, res) => {
    const Dato = new Task(req.body);
    await Dato.save();
    res.redirect('/');
});

router.get('/editar/:id', async (req, res) => {
    const { id } = req.params;
    const Datos = await Task.findById(id);
    res.render('editar', {
        Datos
    });
});

router.post('/Actualizar/:id', async (req, res) => {
    const { id } = req.params;
    await Task.update({_id: id}, req.body);
    res.redirect('/');
});

router.get('/eliminar/:id', async (req, res) => {
    const { id } = req.params;
    await Task.remove({_id: id});
    res.redirect('/');
});


module.exports = router; 