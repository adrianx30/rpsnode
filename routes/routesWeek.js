var express = require('express');
var router = express.Router();
var Week = require('../queries/queriesWeek');

router.get('/:id?', function(req, res, next) {

    if (req.params.id) {

            Week.getWeekById(req.params.id,function(err,rows){

                if(err)
                {
                    res.json(err);
                }
                else{
                    res.json(rows);
                }
            });
    } else {

        Week.getAllWeeks(function(err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});
router.get('/inicio/:inicio', function(req, res, next) {

    Week.getWeekByBegining(req.params.inicio,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.get('/final/:final', function(req, res, next) {

    Week.getWeekByFinal(req.params.final,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.post('/',function(req,res,next){

        Week.addWeek(req.body,function(err,count){

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