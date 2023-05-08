export class Rutas extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render() {
        this.innerHTML = /* html */`
            <table class="table">
            <thead>
            <tr>
                <th scope="col">Rutas</th>
                <th scope="col">Ubicacion</th>
                <th scope="col">Destino</th>
                <th scope="col">Precio y millas</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Medellin</td>
                <td>Bucaramanga</td>
                <td>(236.0 millas) $286.00</td>
                <td><button type="button" class="btn btn-success">comprar</button>
                </td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Medellin</td>
                <td>Bogota</td>
                <td>(260.1 millas)  $315.80</td>
                <td><button type="button" class="btn btn-success">comprar</button>
                </td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Medellin</td>
                <td>Cali</td>
                <td>(254.1 millas)$307.20</td>
                <td><button type="button" class="btn btn-success">comprar</button>
                </td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Medellin</td>
                <td>barranquilla</td>
                <td> (437.2 mi)  $528.20</td>
                <td><button type="button" class="btn btn-success">comprar</button>
                </td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Medellin</td>
                <td>Bogota</td>
                <td>(258.8 mi) $312.00</td>
                <td><button type="button" class="btn btn-success">comprar</button>
                </td>
            </tr>
            </tbody>
        </table>
        `;
    }

}
customElements.define("rutas-cliente", Rutas);