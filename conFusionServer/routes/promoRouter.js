const express=require('express');
const bodyParser=require('body-parser');

 const promoRouter=express.Router();
 promoRouter.use(bodyParser.json());
 


//we have chained all together
promoRouter.route('/')
.all((req,res,next)=>
{
  res.statusCode=200;
  res.setHeader('Content-Type','text/plain');
  next();
})
.get((req,res,next)=>
{
res.end('will send all the promotions to u');
})
.post((req,res,next)=>
{
  res.end('will add the promo: '+req.body.name+
  'with details: '+req.body.description);
})
.put((req,res,next)=>
{
  res.statusCode=403; //for not support
  res.end("put operation not supported on promotions");
})
.delete((req,res,next)=>
{
res.end('will deleting all the promotions!!');
});


promoRouter.route('/:promoId')
.get((req,res,next)=>
{
res.end('will send details of the promo: '
        +req.params.dishId +'to you!' );
})
.post((req,res,next)=>
{
  res.statusCode=403; //for not support
  res.end("post operation not supported on promos/"+req.params.promoId);
})
.put((req,res,next)=>
{
  res.write("updating the promo: "+req.params.promoId+'\n');
  res.end("will update the promo: "+req.body.name+
 'with details: '+req.body.description);
})
.delete((req,res,next)=>
{
res.end('deleting promotion: '+req.params.promoId);
});

module.exports=promoRouter;
