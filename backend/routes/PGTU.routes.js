const Router = require('express')
const router = new Router()
const PGTUController = require('../controller/PGTU.controller')

router.get('/graduates', PGTUController.getAllCourses)
router.post('/graduates', PGTUController.outputPhotoListGraduates)
router.get('/main', PGTUController.outputMainPage)


module.exports = router