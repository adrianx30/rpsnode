var express = require('express');
var router = express.Router();
var News = require('../queries/queriesNews');

router.get('/:id?', function(req, res, next) {

    if (req.params.id) {

            News.getNewsById(req.params.id,function(err,rows){

                if(err)
                {
                    res.json(err);
                }
                else{
                    res.json(rows);
                }
            });
    } else {

        News.getAllNews(function(err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});
router.post('/',function(req,res,next){

        News.addNews(req.body,function(err,count){

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