const { Router} = require('express');

const router = Router();

// ici, une 404 pour l'API
router.use((request, response) => {
    response.status(404).json('No such endpoint');
});

module.exports = router;