import { Router } from "express";
import { createUsers, deleteUsers, getUser, getUsers, updateUsers } from '../controller/UserController.js'

const router = Router();

router.get('/', getUsers)
// router.get('/:id', getById)
router.post('/',createUsers)
router.put('/:id',updateUsers)
router.delete('/:id',deleteUsers)
router.get("/:id",getUser);

export default router