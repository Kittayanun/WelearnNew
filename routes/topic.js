var express = require('express');
var router = express.Router();
const models = require('../db/models');

router.get('/', function(req, res, next) {
    //models.Topic.findAll().then(function(topic) {
    models.Topic.findAll().then(function(topic) {
        res.render('topic_page', {
           // title: 'Topic',
            topic_list: topic
        });
    });
});

router.post('/createPost', function(req, res, next) {
    res.render('create_post');
});

router.get('/detail/#{topic_list.id}', function(req, res, next) {
    res.render('detail');
    /*models.Topic.findAll().then(function(topic) {
        res.render('detail', {
            topic_list: topic
        });
    });*/
});

router.post('/create', function(req, res, next) {
    models.Topic.create({
        title: req.body.title_text,
        detail: req.body.detail_text
    }).then(function() {
        res.redirect('/topic');
    });
});

module.exports = router;   
