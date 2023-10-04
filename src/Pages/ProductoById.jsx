import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTasks } from "../asyncMock";
import ProductCard from "../Components/ProductCard";

export const ProductoById = () => {
    const [tasks, setTasks] = useState([]);
    const { productoNombre } = useParams();

    useEffect(() => {
        getTasks(productoNombre).then((tasks) => {
        setTasks(tasks);
        });
        }, [productoNombre]);

    return (
        <main>
        <h1>Producto seleccionado</h1>
        {tasks.map((task) => 
        <ProductCard key={productoNombre} 
        img={task.img} 
        nombre={task.nombre}
        descripcion={task.descripcion}
        unidades={task.unidades}
        precio={task.precio}/>)}
    </main>
    )};

export default ProductoById;