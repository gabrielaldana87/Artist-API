// var express = require('express');
// var app = express();
//
//
// app.get("/", function(req,res)
// {
//   var artist_sec=["Picasso","Kirchner","Kline","Schiele","Klimt","Courbet","Manet","de Chirico","Marc","Dix","Mondrian","Duchamp"];
//   var artist_first=["Pablo","Ernst","Franz","Egon","Gustav","Gustave","Edouard","Giorgio","Franz","Otto","Piet","Marcel"]
//   var nationality=["Spanish","German","Austrian","Russian","Dutch","Italian","French","American"];
//   var style=["Expressionist","Realist","Romanticist","Abstract Expressionist","Dadaist","Der Blaue Reiter","de Stijl","Surrealist","Neue Sachlichkeit","Cubist"];
//
//   person_obj=
//   {
//     Artist_First: artist_first[Math.floor(Math.random()*artist_first.length)],
//     Artist_Last: artist_sec[Math.floor(Math.random()*artist_sec.length)],
//     Nationality: nationality[Math.floor(Math.random()*nationality.length)],
//     Art_Style: style[Math.floor(Math.random()*style.length)]
//   }
//   console.log(person_obj);
//   res.json(person_obj);
//
//   app.get("/index.html",function(req,res)
//   {
//     res.send("<html><body><ul><li>Artist First Name: "+person_obj.Artist_First+"</li><li>Artist Last Name: "+person_obj.Artist_Last+"</li><li>Artist Nationality: "+person_obj.Nationality+"</li><li>Artist Style: "+person_obj.Art_Style+"</li></ul></body></html");
//   })
// })
//
//
//
// var server = app.listen(3000,function()
// {
//   console.log("listening on port 3000")
// });

var express = require('express');
var app = express();
var fs = require('fs');
app.set('views','./views');
app.engine('html',require('ejs').renderFile);

// app.use('/views',express.static('/views'));


  app.get('/index',function(req,res)
  {
    res.render('index.html')
  })

  app.get("/", function(req,res)
  {
    var artist_sec=["Picasso","Kirchner","Kline","Schiele","Klimt","Courbet","Manet","de Chirico","Marc","Dix","Mondrian","Duchamp"];
    var artist_first=["Pablo","Ernst","Franz","Egon","Gustav","Gustave","Edouard","Giorgio","Franz","Otto","Piet","Marcel"]
    var nationality=["Spanish","German","Austrian","Russian","Dutch","Italian","French","American"];
    var style=["Expressionist","Realist","Romanticist","Abstract Expressionist","Dadaist","Der Blaue Reiter","de Stijl","Surrealist","Neue Sachlichkeit","Cubist"];

    person_obj=
    {
      Artist_First: artist_first[Math.floor(Math.random()*artist_first.length)],
      Artist_Last: artist_sec[Math.floor(Math.random()*artist_sec.length)],
      Nationality: nationality[Math.floor(Math.random()*nationality.length)],
      Art_Style: style[Math.floor(Math.random()*style.length)]
    };
    console.log(person_obj);
    res.json(person_obj);
  });



var server = app.listen(3000,function()
{
  console.log("listening on port 3000")
});
