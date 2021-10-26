const express=require('express');
const cors=require('cors');

const app=express();
const port=5000;
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{

    res.send('hello habi jibbi , from my second server.')
});
const users=[
    {id:0,name:'Shabana',email:'Shabana@gmail.com',phone:'01824973'},
    {id:1,name:'Shabnoor',email:'Shabnoor@gmail.com',phone:'01824973'},
    {id:2,name:'Srabonti',email:'srabonti@gmail.com',phone:'01824973'},
    {id:3,name:'Suchorita',email:'Suchorita@gmail.com',phone:'01824973'},
    {id:4,name:'Soniya',email:'Soniya@gmail.com',phone:'01824973'},
    {id:5,name:'Susmita',email:'Susmita@gmail.com',phone:'01824973'}
    
]
app.get('/users',(req,res)=>{
    const search=req.query.search;
    if(search){
        const searchResult=users.filter(user=>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);

    }
    
});
//app.METHOD
app.post('/users',(req,res)=>{
    const newUser=req.body;
    newUser.id=users.length;
    users.push(newUser);
    res.json(newUser);
})


app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users[id];
    res.send(user);             
    // console.log(req.params.id);
})
app.listen(port,()=>{
    console.log('port',port)
});
    
