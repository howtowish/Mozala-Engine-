const Router = require('express').Router();
var db = require('../model/database')

Router.get('/',(req,res)=>{
    res.send("hahahas")
})
Router.get('/api/getDanhMuc',(req,res)=>{
    db.getDanhMuc((result,err)=>{
        if(err){
            res.json(err)
            return;
        }
        res.json(result)
    })
})
Router.get('/api/getSanPham',(req,res)=>{
    db.getSanPham((result,err)=>{
        if(err){
            res.json(err)
            return;
        }
        res.json(result)
    })
})
module.exports = Router