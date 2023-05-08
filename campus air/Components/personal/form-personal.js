export class FormPersonal extends HTMLElement{
    constructor() {
        super();
        this.render();
    }
    render() {  
        this.innerHTML =/* html */ `
        <div class="card">
            <h5 class="card-header">Registro de personal</h5>
            <div class="card-body">
                <div class="container">
                    <div class="row g-3">
                        <div class="col-12">
                            <form id = "frmData">
                                <div class="row g-3">
                                    <div class="col-4">
                                        <label for="cc" class="form-label">Documento del Cliente</label>
                                        <input type="text" class="form-control" id="cc" name="cc">
                                    </div>
                                    <div class="col-4">
                                        <label for="nombres" class="form-label">Nombres</label>
                                        <input type="text" class="form-control" id="nombres" name="nombres">                  
                                    </div>
                                    <div class="col-4">
                                        <label for="apellidos" class="form-label">Apellidos</label>
                                        <input type="text" class="form-control" id="apellidos" name="apellidos">                  
                                    </div>
                                </div>
                                <div class="row g-3">
                                    <div class="col-4">
                                        <label for="email" class="form-label">Email cliente</label>
                                        <input type="email" class="form-control" id="email" name="email">
                                    </div>
                                    <div class="col-4">
                                        <label for="telefono" class="form-label">Nro Movil</label>
                                        <input type="text" class="form-control" id="telefono" name="telefono">                  
                                    </div>
                                    <div class="col-4 " >
                                        <label for="telefono"   class="form-label">Profecion</label>
                                        <select class="form-select " aria-label="Default select example">

                                            <option value="1">Piloto.</option>
                                            <option value="2">Copiloto.</option>
                                            <option value="3">Asistente de Cabina.</option>
                                            <option value="4">Asistente de counter.</option>
                                            <option value="5">Especialista en mecanica aerea.</option>
                                        </select>
                                    </div>
                                    <div class="container mt-4 text-center" >
                                        <input type="submit" data-accion="POST" class="btn btn-primary" value="Guardar personal ">
                                    </div>
                                </div>
                            </form>                         
                        </div>
                    </div> 
                </div>
            </div>
        </div>    
        `;  
    }
}
customElements.define('form-personal', FormPersonal);