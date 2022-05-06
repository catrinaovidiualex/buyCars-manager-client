import Home from "../view/Home.js";
import Api from "../Api.js";

class UpdateCar{
    constructor(id){
        this.api= new Api();
        this.id=id;
        this.container=document.querySelector(".container");

        this.createUpdateCarPage();
         
        this.populateCarInputs();

        this.car={id:id};

    }

    createUpdateCarPage= async()=>{
        
    }


}