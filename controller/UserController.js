import createError from "../utils/createError.js";
import User from "../model/UsersModel.js";

export const getUsers = async(req, res) =>{
    try {
        const respon = await User.findAll();
        res.status(200).json({
            respon
        })
    } catch (error) {
        console.log(error);
    }
}

export const getUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await User.findByPk(id);
        if (!user) return next(createError(404, "Id Not Found."))    
        res.status(200).json({ user });
    } catch (err) {
        next(err);
    }
};

// export const getById = async (req, res, next) =>{
//     try {
//         const respon = await User.findOne({
//             where: {
//                 id :req.params.id
//             }
//         })
//         if(!respon) return next(createError(404, "blablabla")) 
//         res.status(200).json({
//             respon
//         })
//     } catch (err) {
//         next (err)
//     }
// }

export const createUsers = async (req, res)=>{
    try {
        await User.create(req.body)
        res.status(201).json({
            msg : 'Data Berhasil Di Buat'
        })
    } catch (error) {
        console.log(error);
    }    
}

export const updateUsers = async(req, res)=>{
    try {
        await User.update(req.body,{
            where:{
                id:req.params.id
            }
        })
        res.status(200).json({
            msg : 'Data Berhasil Di Update'
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteUsers = async(req, res)=>{
    try {
        await User.destroy(req.body,{
            where:{
                id:req.params.id
            }
        })
        res.status(200).json({
            msg : 'Data Berhasil Di Hapus'
        })
    } catch (error) {
        console.log(error);
    }
}

