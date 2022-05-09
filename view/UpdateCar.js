import Home from "../view/Home.js";
import Api from "../Api.js";

export default class UpdateCar{
    constructor(car){


        this.api= new Api();
        this.container=document.querySelector(".container");

        this.createUpdatePage();
       
        this.car=car;
         
        // this.car=car;
       
        this.updatedMarca=document.querySelector(".marcaMasina");

        // dupa ce se da click pe cardul masinii se preia valoarea atributelor din home in update car!
        this.updatedMarca.value=this.car.marca;
        this.updatedAn=document.querySelector(".anMasina");
        this.updatedAn.value=this.car.an;
        this.updatedCombustibil=document.querySelector(".combustibilMasina");
        this.updatedCombustibil.value=this.car.combustibil;
        this.updatedPret=document.querySelector(".pretMasina");
        this.updatedPret.value=this.car.pret;

        this.containerUpdateCar=document.querySelector(".updateCars");
        this.containerUpdateCar.addEventListener("change",this.changeCar);

        this.updateBtn=document.querySelector(".modifMasina");
        this.updateBtn.addEventListener("click",this.updateCar);

        this.cancelBtn=document.querySelector(".anuleazaModif");
        this.cancelBtn.addEventListener("click",this.cancelUpdate);

        


        

    }
  // verificam daca inputurile au fost modificate si le salvam valoarea dupa ce s-au modificat
    changeCar= async(e)=>{


        let obj=e.target;

        if(obj.classList.contains("marcaMasina")){
            this.car.marca=obj.value;
        }
        if(obj.classList.contains("anMasina")){
            this.car.an=obj.value;
        }
        
        if(obj.classList.contains("combustibilMasina")){
            this.car.combustibil=obj.value; 
        }
        if(obj.classList.contains("pretMasina")){
            this.car.pret=obj.value;
        }

        
    

        
    }

    
    
   // se creaza pagina de update cu innerhtml
    createUpdatePage=async()=>{
        this.container.innerHTML=`

        <form class="containerModif">
   

    <div class="updateCars">

        <h3>Modificare masina</h3>
    
       
    
        <label for="text">Marca<label>
        <input type="text" class="marcaMasina"></input>

        <label for="text">An<label>
        <input type="text" class="anMasina"></input>

        <label for="text">Combustibil</label>
        <input type="text" class="combustibilMasina"></input>
    
        <label for="text">Pret</label>
        <input type="text" class="pretMasina"></input>
    
        
    </div>
    
    <div class="buttonsUpdateCars">
        <button class="modifMasina">Modifica masina</button>
        <button class="stergeMasina">Sterge masina</button>
        <button class="anuleazaModif">Anuleaza</button>
       
    </div> 

  
</form>
        `

    }

    cancelUpdate(){
        new Home();
    }

    
    


}