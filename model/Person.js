class Person{
    constructor(id,nume, tip_user, user, parola){
           this.id=id;
           this.nume=nume;
           this.tip_user=tip_user
           this.user=user;
           this.parola=parola;
    }

    descrierePersoana=()=>{
           let descriereP="";
           descriereP+=" ID persoana: "+this.id+",";
           descriereP+=" Nume persoana: "+this.nume+",";
           descriereP+=" Tip user: "+this.tip_user+",";
           descriereP+=" User: "+this.user+";";
           descriereP+=" Parola: "+this.parola+";"

           return descriereP;
    }

}

export default Person;