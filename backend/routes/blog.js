const express = require('express');
const router = express.Router();
const Blog = require('../models/blog.js');


router.get('/blog', (req, res) => {
    Blog.find({}, (err, data) => {
        res.json(data);
    })
})

router.get('/blog/:id', (req, res) => {
    Blog.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

router.delete('/blog/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ 'message': 'Deleted' });
})

router.post('/blog', (req, res) => {
    blog = new Blog({
        title: req.body.title,
        description: req.body.description,
        photo: req.body.photo,
        user: req.body.user
    })
    blog.save(() => {
        res.json(blog);
    })
})

router.put('/blog/:id', async (req, res) => {
    await Blog.findByIdAndUpdate(req.params.id, req.body);
    res.json({ 'message': 'Updated' })
})

module.exports = router