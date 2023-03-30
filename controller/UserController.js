import User from "../model/UsersModel.js";
import createError from "../utils/createError.js";

export const getAllUser = async (req, res, next) => {
    try {
        const respon = await User.findAll();
        res.status(200).json({
            respon
        })
    } catch (err) {
        next(err)
    }
};

export const findOneUser = async (req, res, next) => {
    try {
        const respon = await User.findOne({ where: { id: req.params.id } })
        if (!respon) return next(createError(404, "User tidak ditemukan!"))
        res.status(200).json({ respon })
    } catch (err) {
        next(err);
    }
};

export const createUser = async (req, res, next) => {
    try {
        await User.create(req.body)
        res.status(200).json({ msg: "Create berhasil." })
    } catch (err) {
        next(err);
    }
}

export const updateUser = async (req, res, next) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            msg: 'Update Berhasil'
        })
    } catch (err) {
        next(err);
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            msg: 'Data Berhasil Di Hapus'
        })
    } catch (err) {
        next(err)
    }
};

