const { Router } = require("express");

const TagsController = require("../controllers/TagsController")

const tagsRoutes = Router();

const tagsController = new TagsController();

const ensureAuthenticated = require("../middleware/ensureAuthenticated");

tagsRoutes.get("/", ensureAuthenticated,tagsController.index);

module.exports = tagsRoutes;