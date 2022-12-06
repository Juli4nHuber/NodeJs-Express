const express = require('express');

const routerMatematicas = express.Router();

const {matematicas} = require('../data/cursos.js').infoCursos;

routerMatematicas.get('/:cursoTema', (req, res) => {
    const cursoTema = req.params.cursoTema;
    const resultados = matematicas.filter(curso => curso.tema == cursoTema);
    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de matematica de: ${cursoTema}`);
    }
    else {
        return res.status(200).send(resultados);
    }
});

module.exports = routerMatematicas;