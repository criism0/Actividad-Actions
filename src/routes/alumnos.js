const Router = require('koa-router');
const { Alumno } = require('../models');

const router = new Router();

// Ruta para obtener todos los alumnos (GET)
router.get('/', async (ctx) => {
  try {
    const alumnos = await Alumno.findAll();
    ctx.body = {
      status: 'success',
      data: alumnos
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = {
      status: 'error',
      message: error.message
    };
  }
});

router.post('/', async (ctx) => {
  try {
    const { nombre, apellido, pelicula_favorita } = ctx.request.body;
    const newAlumno = await Alumno.create({ nombre, apellido, pelicula_favorita });
    ctx.status = 201;
    ctx.body = {
      status: 'success',
      data: newAlumno
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = {
      status: 'error',
      message: error.message
    };
  }
});

module.exports = router;
