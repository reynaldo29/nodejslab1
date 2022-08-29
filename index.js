import express from "express";


const app = express();

app.use(express.json());

const people = [];

//request=> cliente envia una peticion
//resppnse => respuesta del servidor
app.get("/",(request,response)=>{
    return response.json({
        ok:true,
        data:people
    });
    
});

app.post("/create",function(req,res){
    const data = req.body;
    data.id =people.length +1;
   people.push(data);
    return res.status(201).json({
        ok:true,
        data:data,
    })
})

app.put('/update/:id',(req,res)=>{
    const peopleId = req.params.id;
    const body = req.body;

    const indexElement= people.findIndex((obj => obj.id == peopleId ));
    people[indexElement].nombre = body.nombre;
    people[indexElement].apellido = body.apellido;
    const data =  people
    return res.json({
        ok:true,
        data: data
    })
})

app.delete('/delete/:id', (req,res) =>{
    const peopleId = req.params.id;
    const body = req.body;
    const indexElement = people.findIndex((obj => obj.id==peopleId));
    people.splice(indexElement,1);

    return res.json({
        ok:true,
        data:people
    })
})


app.listen(6004, () =>console.log(`El servidor inicio en http://localhost:6004`));

//update de una persona x
//delete x
// word de canvas fotos del codigo en postman o rappi appi
//rapi api
//subir al  github enviar link