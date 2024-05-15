const router = require('express').Router(); // express router
const UserControllers = require('../controllers/userController'); // import user controller

router.post('/register', UserControllers.register); // register route
router.post('/login', UserControllers.login); // login route

module.exports = router; // export router