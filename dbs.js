const mysql=require('mysql2');
const express=require('express');
var app=express();
const parser=require('body-parser');
const { response } = require('express');
app.use(parser.json());
var connection=mysql.createConnection(

{
    host:'localhost',
    user:'root',
    password:'EXOspace3e**',
    database: 'staff_management'
}

);

connection.connect((err)=>
{
    if(!err)
    console.log('DB Connected..');
    else
    console.log('ERROR');
})

app.listen(5500,()=>
console.log('Server Started'));
app.get('/employee',(request,response)=>
{
    connection.query('SELECT * FROM employee ',(err,rows,fields)=>
    {
        if(!err)
        response.send(rows);
else
console.log("error");
    })
}
)

  
app.get('/add',(req,response)=>
{
    var post={ employee_id:84660000,department_id:5,employee_name:'Ananya',employee_contact:7799567890,employee_state:'Ranchi',employee_qual:'Graduate-Btech',employee_job:'ARCHITECT',employee_salary:320000};
    var sql =`insert into employee SET ?`;
    var query=connection.query(sql,post,(err,result)=>
    {
        if(err) throw error;
        response.send('inserted rows...')
    }
    ); 
});


app.get('/update/:id',(req,response)=>
{
    var name='Sabrina'
    var sql=`UPDATE employee set employee_name= '${name}' where employee_id=${req.params.id}`;
    var query=connection.query(sql,(err,result)=>
     {if(err)throw err;
     response.send("updated")
});    
});

app.get('/delete/:id',(req,res)=>
{
    var sql=`DELETE FROM employee  where employee_id=${req.params.id}`;
    var query=connection.query(sql,(err,result)=>
    {if(err)throw err;
    response.send("updated")
});    
});

