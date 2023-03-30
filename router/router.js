import { Router } from "express";
import { createUser, deleteUser, findOneUser, getAllUser, updateUser } from '../controller/UserController.js'

const router = Router();

router.get('/', getAllUser)
router.get("/:id",findOneUser)
router.post('/',createUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)

export default router