// import express from 'express';
const express = require('express');
const app = express();

const PUERTO = process.env.PORT || 3000;

const { infoCursos } = require('./data/cursos.js');

const routerProgramacion = require('./routers/programacion');

const routerMatematicas = require('./routers/matematicas');

app.use('/api/cursos/programacion', routerProgramacion);

app.use('/api/cursos/matematicas', routerMatematicas);


app.get('/', (req, res) => {
    res.send('Mi primer servidor. Cursos.');
});

app.get('/api/cursos', (req, res) => {
    res.send(infoCursos);
});

app.get('/api/cursos/:cursoCategoria', (req, res) => {
    const cursoCategoria = req.params.cursoCategoria;
    if (infoCursos[cursoCategoria]) {
        res.status(200).send(infoCursos[cursoCategoria]);
    }
    else {
        res.status(404).send(`No se encontraron cursos de la categoria: ${cursoCategoria}`);
    }
});

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});

