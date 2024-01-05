var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')

/* GET users listing. */
router.get('/new', skillsCtrl.new)
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);
// create /skills
router.post('/', skillsCtrl.create);
//delete /skills/:id
router.get('/:id/edit', skillsCtrl.edit);
//PUT /skills/:id
router.put('/:id', skillsCtrl.update);

router.delete('/:id', skillsCtrl.delete);

module.exports = router;
