export class HomePage extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render() {
        this.innerHTML = /* html */`
            <div class="home-us">
                <h1>Bienvenido a aerolans</h1>
                <p>Disfruta tu experiencia viajando con nosotros</p>
                
            </div>
            <div class="home-img">
                <img src="/img/logoPrincipal-s.png" height="700px">
            </div>
            
        `;
    }
}
customElements.define('home-page', HomePage);