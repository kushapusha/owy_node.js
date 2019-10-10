const router = require('express').Router();

const { user } = require('../../controllers');
const { userMiddleware } = require('../../middleware');

router.post('/', userMiddleware.checkUserValidMiddleware, user.createUser);
router.get('/:id', userMiddleware.isUserPresentMiddleware, user.getByID);
router.get('/', userMiddleware.findAllUsersMiddleware ,user.findAll);

module.exports = router;