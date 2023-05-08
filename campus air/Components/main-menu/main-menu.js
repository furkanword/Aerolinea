export class MainMenu extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    //va a contener todo el html y todos esos elementos que quiero renderizar
    render(){
        this.innerHTML = /* html */ `
            <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
            <img src="/img/avion.png" width="50" height="50">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" href="home.html">
                             <span class="ms-1 d-none d-sm-inline">Home</span>
                            </a>

                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="customers.html">
                            <i class='bx bx-child'></i> <span class="ms-1 d-none d-sm-inline">Clientes</span>
                            </a>

                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="list.html">
                            <i class='bx bx-child'></i> <span class="ms-1 d-none d-sm-inline">Listado Clientes</span>
                            </a>

                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="rutas.html">
                            <i class='bx bx-search-alt' ></i> <span class="ms-1 d-none d-sm-inline">Rutas</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="personal.html
                            ">
                            <span class="ms-1 d-none d-sm-inline">Personal</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class= "col py-3">
                    <div class="modal" tabindex="-1">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <p>Modal body text goes here.</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        `;
    }
}
customElements.define("main-menu", MainMenu);