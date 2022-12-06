const express = require('express');

const routerProgramacion = express.Router();

const {programacion} = require('../data/cursos.js').infoCursos;

//middle intermedio
routerProgramacion.use(express.json());

routerProgramacion.get('/:cursoLenguaje', (req, res) => {
    const cursoLenguaje = req.params.cursoLenguaje;
    const resultados = programacion.filter(curso => curso.lenguaje == cursoLenguaje);
    if (resultados.length === 0) {
        return res.status(204).send(`No se encontraron cursos de programacion de: ${cursoLenguaje}`);
    }
    else {
        return res.status(200).send(resultados);
    }
})

routerProgramacion.post('/', (req, res) => {
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.status(201).send(programacion);
})

routerProgramacion.put('/:id', (req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >= 0){
        programacion[indice] = cursoActualizado;
    }
    res.status(200).send(programacion);

})

routerProgramacion.patch(':/id', (req, res) => {
    const infoActualizada = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if (indice >= 0){
        const cursoAModificar = programacion[indice];
        Object.assign(cursoAModificar, infoActualizada);
    }
    res.send(programacion);
})

routerProgramacion.delete(':/id', (req, res) => {
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >= 0) {
        programacion.splice(indice, 1);
    }
    res.send(programacion);
})

module.exports = routerProgramacion;