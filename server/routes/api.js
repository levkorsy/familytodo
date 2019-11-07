var express = require('express');
var router = express.Router();
var MemberModel = require('../models/Member')
var TodoModel = require('../models/Todo')

/* GET allMembers page. */
router.get('/member/all', function (req, res, next) {
    MemberModel.find(function (err, data) {
        res.json({ data });
    });
});

/* GET allTodos page. */
router.get('/todo/all', function (req, res, next) {
    TodoModel.find({}).populate('familyMember').exec(function (err, data) {
        res.json({ data });
    });
});

/* POST newTodo page. */
router.post('/todo/add', function (req, res, next) {
    console.log("req body", req.body);
    var familyMember = req.body.member;
    var description = req.body.description;
    var d = new Date,
    dformat = [d.getMonth()+1,
               d.getDate(),
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');
console.log(dformat);
var date = dformat


    var newTodo = new TodoModel({ description, date, familyMember });
    newTodo.save(function(err, data) {
        console.log("result after adding",data);
        
        res.json({ data });
    })
    
});

module.exports = router;
