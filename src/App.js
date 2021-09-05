import React,{useState} from 'react';
import { isEmpty } from 'lodash';
import shortid from 'shortid';

function App() {
const [tarea, setTarea] = useState("")
const [tareas, setTareas] = useState([])


const addTarea=(e)=>{
 e.preventDefault()
  if(isEmpty(tarea)){
    console.log("No se aceptan campos vacios")

 
return
  }

  const newTarea={
    id:shortid.generate(),//genera id unico alanumerico
    nombre: tarea
  }

  setTareas([...tareas,newTarea])//agregar nueva tarea a la lista de taras.
  
  setTarea("")
alert("Tarea Agregada")
}
return (
    <div className="container mt-5">
      <h1>Tareas</h1>
      <hr/>
      
      <div className="row">
        <div className="col-sm-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
  {
    tareas.map((tarea)=>(
<li className="list-group-item"key={tarea.id} >
    <span className="lead">{tarea.nombre}</span>
    <button className="btn btn-danger btn-sn float-right mx-2">Eliminar</button>
    <button className="btn btn-warning btn-sn float-right">Editar</button>
    
    </li>
    ))
    }
  
</ul>
      </div>
      <div className="col-sm-4">
      <h4 className="text-center">Formulario</h4>
      <form onSubmit={addTarea}>
        <input type="text"
              className="form-control mb-2"
              placeholder="Ingrese la tarea..."
              onChange={(text) => setTarea(text.target.value)}
              value={tarea}/>
      
              
      <button className="btn btn-dark btn-block" type="submit" >Agregar</button>
</form>

</div>
</div>
</div>
  );
}

export default App;