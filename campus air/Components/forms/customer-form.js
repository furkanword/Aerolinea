import { postData,putData,opc } from "../../Apis/customer-api.js";
export class CustomersForm extends HTMLElement {
    constructor(){
        super();
        this.render();
        
    }
    render (){
        this.innerHTML = /* html */`
        <div class= "card">
            <h5 class= "card-header">Registro de clientes</h5>
            <div class= "card-body ">
                <div class="container">
                    <div class= "row g-3">
                        <div class= "col-12" >
                            <form class="frmData" id="frmData">
                                <div class ="row g-3">  
                                    <div class="col-3">
                                        <label for="city" class="form-label">Ciudad</label>
                                        <input type="text" class="form-control" id="city" name="city">
                                    </div>
                                    <div class="col-3">
                                        <label for="cc" class="form-label">Documento Cliente</label>
                                        <input type="text" class="form-control" id="cc" name="cc">    
                                    </div>
                                    <div class="col-3">
                                        <label for="nombres" class="form-label">Nombres</label>
                                        <input type="text" class="form-control" id="nombres" name="nombres">    
                                    </div>
                                    <div class="col-3">
                                        <label for="apellidos" class="form-label">Apellidos</label>
                                        <input type="text" class="form-control" id="apellidos" name="apellidos">    
                                    </div>
                                </div>  
                                <div class ="row g-3">
                                    <div class="col-3">
                                        <label for="email" class="form-label">Email cliente</label>
                                        <input type="text" class="form-control" id="email" name ="email">
                                    </div>
                                    <div class="col-3">
                                        <label for="telefono" class="form-label">Numero movil</label>
                                        <input type="text" class="form-control" id="telefono" name="telefono">    
                                    </div>
                                    <div class="col-3">
                                        <label for="fechanac" class="form-label">Fecha de nacimiento</label>
                                        <input type="date" class="form-control" id="fechanac" name="fechanac">    
                                    </div>
                                    <div class="col-3">
                                        <label for="pais" class="form-label">Pais Origen</label>
                                        <input type="text" class="form-control" id="pais" name="pais">

                                    </div>
                                </div> 
                            </form>  
                        </div> 
                    </div>
                </div>
                    <div class="container mt-4 text-center">
                        <a href="#" class ="btn btn-success" id="btnGuardar">Guardar cliente</a>
                    </div>
            </div>
        </div>
         
        `
        this.saveData();
    
    }
    saveData = () =>{
        let myForm = document.querySelector("#frmData");
        myForm.addEventListener("submit", (e)=>{
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.target));
            opc[e.submitter.dataset.accion](data) 
            console.log(data) 
        });
    }
}
customElements.define("customer-form",CustomersForm );

