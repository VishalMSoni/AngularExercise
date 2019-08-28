const router = express.Router();
const validator = require('express-joi-validator');

const { idSchema } = require('../../utils/schema');
const UserController = require('./userRepository');

router.route('/getAll').get(UserController.getAll);
router.route('/get/:id').get(validator(idSchema), UserController.getUserById);
router.route('/create').post(UserController.createUser);
router.route('/update/:id').put(UserController.updateUserById);
router.route('/remove/:id').delete(UserController.deleteUserById);

module.exports = router;