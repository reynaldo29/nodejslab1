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
   people.push(req.body);
    return res.status(201).json({
        ok:true,
        data:"Persona creada",
    })
})

app.listen(6004, () =>console.log(`El servidor inicio en http://localhost:6004`));

//update de una persona
//delete
// word de canvas fotos del codigo en postman o rappi appi
//rapi api
//subir al  github enviar link