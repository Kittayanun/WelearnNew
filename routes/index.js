var express = require('express');
var router = express.Router();
const models = require('../db/models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* Tutor Page 
   you see create post button and all topic*/
router.post('/tutor', function(req, res, next) {
    models.Topic.findAll().then(function(topic) {
        res.render('tutor_page', {
            topic_list: topic
        });
    });
});

/* Tutor Page (create post)[after click "create post" button in Tutor Page 
   you can input Topic and Detail*/
router.post('/tutor/createPost', function(req, res, next) {
    res.render('create_post');
});


/* Detail Page 
   you see Topic and Detail of Topic.ID*/
router.get('/tutor/detail/:id', function(req, res, next) {
    var ID = req.params.id
    models.Topic.findById(ID).then(function(topic) {
        res.render('detail', {
            topic_list: topic
        });
    });
});

/* create data in models Topic(database*/
router.post('/tutor/create', function(req, res, next) {
    models.Topic.create({
        title: req.body.title_text,
        detail: req.body.detail_text,
        comment: [
            { comment: req.body.detail_text}
        ]
    }, {
        include: [{
            model: models.Comment,
            as: 'comment'
        }]
    }).then(function() {
        res.redirect('/tutor');
    });
});

router.post('/tutor/create/comment', function(req, res, next) {
    models.Comment.create({
        comment: req.body.comment_text
    }).then(function() {
        res.redirect('/tutor');
    });
});

module.exports = router;
