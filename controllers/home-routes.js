const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');


//need router.get to get the users blog entries and data
router.get('/', async (req, res) => {
try {
const blogData = await Blog.findAll ({
include : [
//this will be the model user and attributes after created


]

})



}





})




















module.exports = router;