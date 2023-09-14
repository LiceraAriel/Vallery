import IconoCarrito from "./IconoCarrito";
import ItemCart from "./ItemCart";

const ContenedorCart = () => {
    return (
        <div className ="bg-success-subtle rounded p-3 position-relative">
            <IconoCarrito />
            <ItemCart count={3}/>
        </div>
    )
}

export default ContenedorCart;