var express = require('express');
var router = express.Router();
var User = require('../queries/queriesUser');

router.get('/:username?', function(req, res, next) {

    if (req.params.username) {

            User.getUserByUsername(req.params.username,function(err,rows){

                if(err)
                {
                    res.json(err);
                }
                else{
                    res.json(rows);
                }
            });
    } else {

        User.getAllUsers(function(err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});
router.post('/',function(req,res,next){

        User.addUser(req.body,function(err,count){

            //console.log(req.body);
            if(err)
            {
                res.json(err);
            }
            else{
                    res.json(req.body);//or return count for 1 & 0
            }
        });
});
/*
 router.post('/:id',function(req,res,next){
  Task.deleteAll(req.body,function(err,count){
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(count);
    }
  });
});
router.delete('/:id',function(req,res,next){

        Task.deleteTask(req.params.id,function(err,count){

            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(count);
            }

        });
});
router.put('/:id',function(req,res,next){

    Task.updateTask(req.params.id,req.body,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});*/
module.exports = router;