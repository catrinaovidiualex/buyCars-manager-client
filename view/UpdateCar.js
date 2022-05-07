import Home from "../view/Home.js";
import Api from "../Api.js";

class UpdateCar{
    constructor(id){
        this.api= new Api();
        this.id=id;
        this.container=document.querySelector(".containerModif");

        this.UpdateCarPage();
         
        this.car={id:id};

        this.updatedMarca=document.querySelector(".marcaMasina");
        this.updatedAn=document.querySelector(".anMasina");
        this.updatedCombustibil=document.querySelector(".combustibilMasina");
        this.updatedPret=document.querySelector(".pretMasina");

    }

    UpdateCarPage= async()=>{
        let containerUpdate= await this.api.updateCar(car);

        let car={
            marca:this.updatedMarca.value,
            an:this.updatedAn.value,
            combustibil:this.updatedCombustibil.value,
            pret:this.updatedPret.value

        }

        this.api.updateCar(car);

        location.reload /*reincarca pagina */


        
    }


}