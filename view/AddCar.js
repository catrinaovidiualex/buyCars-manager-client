import Home from "../view/Home.js";
import Data from "../Api.js";

class AddCar{

    constructor(){
        this.containerAddCar=document.querySelector(".containerCar");
        this.createAddcarPage();
    
       
        this.car= {};
    
        this.inputCars= document.querySelector(".inputCars");
        this.inputCars.addEventListener("input",this.handleChange);

        this.add=document.querySelector(".adaugare");
        this.add.addEventListener("click",this.handleClickAddCar);
    
        this.cancelBtn=document.querySelector(".anuleaza");
        this.cancelBtn.addEventListener("click",this.handleClickCancel);
    
     
     
        }

    createAddCarPage=()=>{
        this.containerAddCar.innerHTML=`


    <div class="inputCars>
        <h3>Marca</h3>
        <input type="text" id="addmarca" placeholder="adauga marca masina">


        <h3>An Fabricatie</h3>
        <input type="text" id="addan" placeholder="adauga an masina">

        <h3>Combustibil</h3>
        <input type="text" id="addcombustibil" placeholder="adauga combustibil masina">

        <h3>Pret</h3>
        <input type="text" id="addpret" placeholder="pret masina">
    </div>

        <p>Pentru a cumpara o masina din lista apasati butonul 'Cumpara'</p>

        

        <button class="cumparare">Cumpara Masina</button>
        <button class="adaugare">Adauga Masina</button>
        <button class="stergere">Sterge Masina</button>
        <button class="returnare">Returneaza Masina</button>
        `
    } 
    
    handleChange=async(e)=>{
        
        let obj=e.target;

        if(obj.classList.contains("addmarca")){
            this.car.marca=obj.value;
           
        }

        if(obj.classList.contains("addan")){
           this.car.an=obj.value;
          
       }

       if(obj.classList.contains("addcombustibil")){
        this.car.combustibil=obj.value;
       
    }

    if(obj.classList.contains("addpret")){
        this.car.pret=obj.value;
       
    }
  
             
}

    handleClickAddCar=async(e)=>{
        console.log(this.car);

        let c = new Data();
    
        c.addCar(this.car);
    
            new Home();

    }





}

export default AddCar;