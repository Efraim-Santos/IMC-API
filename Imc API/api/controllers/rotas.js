const data = require("../data/pacientes.json");

module.exports = app => {
    app.get("/pacientes", (req, res) => {
        res.json("data");
    });
};



// app.get("/pacientes/:id", (req, res)=>{
    //     const { id } = req.params;
    //     const pacientes = data.find(valor => valor.id == id);
    
    //     if(!pacientes) return res.status(404).json();
        
    //     res.json(pacientes);
    // });
    
    
    // app.post("/pacientes", (req, res) => {
    //     const {nome, peso, altura} = req.body;
      
    //     res.json({nome, peso, altura});
    // });
    
    
    
    // app.put("/pacientes/:id", (req, res) => {});
    
    // app.delete("/pacientes/:id", (req, res) => {
    //     const { id } = req.params;
    //     const clientsFiltered = data.filter(paciente => paciente.id != id);
    
    //     res.json(clientsFiltered);
    // });