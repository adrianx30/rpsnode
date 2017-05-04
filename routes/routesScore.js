var express = require('express');
var router = express.Router();
var Score = require('../queries/queriesScore');

router.get('/week/:id', function(req, res, next) {

    Score.getScoresWeek(req.params.id, function(err, rows) {
        if (err) {
            console.log('asdf');  
            res.json(err);
        } else {
            console.log('se supone que no dio error');  
            res.json(rows);
        }

    });
});

router.get('/get/user/:id', function(req, res, next) {

    Score.getUserById(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }

    });
});

router.post('/add/user',function(req,res,next){

        Score.addUser(req.body,function(err,count){

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

router.put('/update/week/:id',function(req,res,next){

    Score.updateScore(req.params.id,req.body,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
/*router.post('/',function(req,res,next){

        Task.addTask(req.body,function(err,count){

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