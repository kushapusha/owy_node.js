const db = require('../../database').getInstance();

module.exports = async (req, res, next) => {
    try {
        const {id} = req.params;
        const UserModel = db.getModel('User');

        let ThisUser = await  UserModel.findByPk(id);

        if (!ThisUser.length) {
            return res.redirect('/regist');
        }

        req.user = ThisUser;
        next();
    } catch (e) {
       res.status(400).json(e.message)
    }
};