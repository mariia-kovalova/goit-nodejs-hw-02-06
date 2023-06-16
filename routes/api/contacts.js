const express = require('express');
const ctrl = require('../../controllers/contatcs');
const { validateBody } = require('../../middlewares');
const schemas = require('../../schemas/contacts');

const router = express.Router();

router.get('/', ctrl.getAll);

router.get('/:contactId', ctrl.getById);

router.post('/', validateBody(schemas.addSchema), ctrl.add);

router.delete('/:contactId', ctrl.remove);

router.put('/:contactId', validateBody(schemas.addSchema), ctrl.updateById);

module.exports = router;