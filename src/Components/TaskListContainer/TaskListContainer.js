import { useEffect, useState } from "react";
import { getTasks } from "../../asyncMock";
import ProductCard from "../ProductCard";

const TaskListContainer = () => {
const [tasks, setTasks] = useState([]);

useEffect(() => {
    getTasks().then((tasks) => {
    setTasks(tasks);
    });
    }, []);

    if (!tasks.length) return <h1>Cargando...</h1>;

    return (
    <main>
        <h1>Lista de Productos</h1>
        {tasks.map((task) => 
        <ProductCard key={task.id} 
        img={task.img} 
        nombre={task.nombre}
        descripcion={task.descripcion}
        unidades={task.unidades}
        precio={task.precio}/>)}
    </main>
    );
};

export default TaskListContainer;