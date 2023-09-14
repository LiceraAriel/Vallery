import Brand from "./Brand";
import MenuBoton from "./MenuBoton";
import ItemCategoria from "./itemCategoria";
import ContenedorCart from "./ContenedorCart";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Brand />
                <MenuBoton />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <ItemCategoria isActive={true} name="Productos"/>
                    </li>
                    <li className="nav-item">
                        <ItemCategoria isActive={false} name="Milanesas de Soja"/>
                    </li>
                    <li className="nav-item">
                        <ItemCategoria isActive={false} name="Comidas Veganas"/>
                    </li>
                    <li className="nav-item">
                        <ItemCategoria isActive={false} name="Pastas integrales"/>
                    </li>
                    <li className="nav-item">
                        <ItemCategoria isActive={false} name="Hamburguesas"/>
                    </li>
                    </ul>
                </div>
                <ContenedorCart />
            </div>
        </nav>
    )
}

export default Navbar;