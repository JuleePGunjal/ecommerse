

var express=require('express')
var app=express()


app.get("/",(req,res)=>{
    res.send(
        "<h1>Vijay Sales</h1>"
        +"<hr/>"
        +"<h2>SALE  SALE  SALE</h2>"
        +"<h3>Exclusive offer on electronic products</h3>"
        +"<ol>"
        +"<li>Hololense</li>"
        +"<li>MI-Mobile</li>"
        +"<li>One plus Battery backup</li>"
        +"<li>One plus bluetooth</li>"
        +"</ol>"
    )
})

var server=app.listen(9000)
console.log("Listning to the server at  9000 ")