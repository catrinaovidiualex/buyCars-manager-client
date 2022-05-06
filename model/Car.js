class Car{
      

    constructor(id,an,combustibil,marca,pret,person_id){
           this.id=id;
           this.an=an;
           this.combustibil=combustibil;
           this.marca=marca;
           this.pret=pret;
           this.person_id=person_id;
    }

     descriere=()=>{
         let descriere="";
         descriere+=" Id Masina: "+this.id+",";
         descriere+=" An Masina: "+this.an+",";
         descriere+=" Combustibil Masina: "+this.combustibil+",";
         descriere+=" Marca masina: "+this.marca+",";
         descriere+=" Pret masina: "+this.pret+",";
         descriere+=" Id Persoana: "+this.person_id+";";
         
         return descriere;
     }


}





export default Car;