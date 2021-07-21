var express = require("express"),
  router = express.Router(),
  cors = require("cors");

 router.post("/storeImages",cors(), async function (req, res) {
    console.log(req.data,"data");
    console.log(req,"req");
    let Name = req.body.Name;
    let ImageName = req.body.ImageName;
    let ImageUrl = req.body.ImageUrl;
    res.send({
        Message:"Successfully stored"
    })
})
router.get("/api/test",function(req, res){
    console.log("in test");
res.send("welcome Be")
})

module.exports = router
