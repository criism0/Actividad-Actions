const Router = require('koa-router');
const alumnos = require('./alumnos');

const router = new Router();

router.use('/alumnos', alumnos.routes());

module.exports = router;