import { Router } from "express";
import { createContact, deleteContact, filterContacts, getAllContacts, getContactById, searchContacts, updateContact } from "../controllers/ContactsController";

const router = Router();

router.post("/", createContact);
router.put('/:id', updateContact);
router.get('/search', searchContacts);
router.get('/filter', filterContacts);
router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.delete('/:id', deleteContact);

export default router;
