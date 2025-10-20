import logo from "../img/Logo2.png";

const NavBar = () => {
  return (
    <header>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a href="" class="navbar-brand">
            <img src={logo} alt="Logo Local" className="logo" />
          </a>
          <h1 className="titulo">Tu negocio de confianza</h1>
          <form class="d-flex" role="search">
            <i className="Carrito"></i>
            <input
              class="form-control me-2"
              type="search"
              placeholder=""
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit"></button>
          </form>
        </div>
      </nav>
      <ListOptions></ListOptions>
    </header>
  );
};
const ListOptions = () => {
  return (
    <div class="container text-center">
      <div class="row align-items-start">
        <div class="col">
          <a href="" className="link">
            Pastas
          </a>
        </div>

        <div class="col">
          <a href="" className="link">
            Chocolates
          </a>
        </div>

        <div class="col">
          <a href="" className="link">
            Fiambre
          </a>
        </div>

        <div class="col">
          <a href="" className="link">
            Bebidas
          </a>
        </div>

        <div class="col">
          <a href="" className="link">
            Congelados
          </a>
        </div>

        <div class="col">
          <a href="" className="link">
            Promociones
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
