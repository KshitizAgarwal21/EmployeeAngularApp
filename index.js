const express=require('express');
const app=express();
app.use(express.json())
const cors=require('cors')
var fs = require('fs');
PORT=3300
app.use(cors())

app.post('/hagemaru',(req,res)=>{

console.log('body data',req.body)
data=req.body

fs.readFile('mynewfile1.json', (err, fileData)=>{
    var json = JSON.parse(fileData);
    json.push(data);
    fs.writeFile("mynewfile1.json", JSON.stringify(json), (errors,abc)=>
    {
        if(errors) return res.status(400).json({'mesage':'nahi gaya'})
        else return res.status(200).json({'message':'Data updated sucessfuylly'});
    });
});

  });



app.get('/getUser',(req,res)=>
{
fs.readFile('mynewfile1.json',(error,info)=>
    {
        if (error) return res.status(400).send('Bad request')
        else return res.status(200).json(JSON.parse(info.toString()));

    })
})

app.get('/adminLogin', (req, res)=>
{
    fs.readFile('loginDetails.json',(errs, ldata)=>
    {
        if(errs) return res.status(400).send('Bad Request')
        else return res.status(200).json(JSON.parse(ldata.toString()));
    })
})

app.delete('/deleteUser/:id', (req, res)=>
{
    var userid = req.params.id;
    console.log(userid);
    fs.readFile('mynewfile1.json', (error, info)=>{
        var json = JSON.parse(info);
        // delete command
        console.log(json);
        for( var i=0; i<json.length; i++)
        {
            if(json[i].id == userid)
            {
                json.splice(i,1);
            }
        }
        fs.writeFile('mynewfile1.json', JSON.stringify(json), (error, okmsg)=>
        {
            if(error) return res.status(400).send('gadbad')
            else return res.status(200).json({'message':'delete hui gawa'});
        })
    })
})


app.listen(PORT,()=>{
    console.log(`Server runing on ${PORT}`)
});