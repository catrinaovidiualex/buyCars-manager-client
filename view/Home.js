
import Api from "../Api.js";
import UpdateCar from "./UpdateCar.js";


export default class Home{

constructor(id){
    let container=document.querySelector(".container");
    this.api=new Api();
    this.id=id;
    this.containerCar=document.querySelector(".containerCar");
    this.newmarca =document.querySelector("#addmarca");
    this.newcombustibil =document.querySelector("#addcombustibil");
    this.newan =document.querySelector("#addan");
    this.newpret =document.querySelector("#addpret");
    this.populateTable();

    this.car={};
    this.addNewCars =document.querySelector(".adaugare");
 
    this.addNewCars.addEventListener("click",this.addNewCar);
    container.addEventListener("click",this.updateCar);
    

}

createCard=(obj)=>{

    let section=document.createElement('section');

    section.classList.add('masina');

    section.classList.add(`id${obj.id}`)

    
    let p1=document.createElement("p");
    p1.classList.add("marca");
    p1.textContent=obj.marca;
    section.appendChild(p1);

    let p2=document.createElement("p");
    p2.classList.add("anfabricatie");
    p2.textContent=obj.an;
    section.appendChild(p2);

    let p3=document.createElement("p");
    p3.classList.add("combustibil");
    p3.textContent=obj.combustibil;
    section.appendChild(p3);
    
    let p4=document.createElement("p");
    p4.classList.add("pret");
    p4.textContent=obj.pret;
    section.appendChild(p4);

    return section;

}



populateTable=async()=>{

    let cars= await this.api.cars();


        let table=document.querySelector(".container");
        

         cars.forEach((e)=>{

            table.appendChild(this.createCard(e));
        })

}




addNewCar=async(e)=>{

    let car={

        marca:this.newmarca.value,
        an:this.newan.value,
        combustibil:this.newcombustibil.value,
        pret:this.newpret.value
    
    }


    this.api.addCar(car);




    location.reload(); /*reincarca pagina */


   }

updateCar=async(e)=>{
    let obj=e.target;

    if(obj.parentNode.classList.contains("masina")){
        let parent=obj.parentNode;
        let id=parent.classList[1];
        id=id.substr(2);
        id=+id;

        let cars= await this.api.cars();


        let car=cars.filter(e=>e.id==id)[0];


       
        new UpdateCar(car);


    }
    

}  

handleClick=(e)=>{
    new UpdateCar();
}



}
