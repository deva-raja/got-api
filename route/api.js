let express = require('express');
let ApiController = require('../controllers/ApiController');

let router = express.Router();
router.use(express.json());

router.get('/got', ApiController.index);
router.post('/got', ApiController.store);
router.put('/got/:id', ApiController.update);
router.delete('/got/:id', ApiController.destroy);

module.exports = router;