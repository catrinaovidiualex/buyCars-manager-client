class Buy{
    constructor(idCar,idPeron){
        this.idBuy=idBuy;
        this.idCar=idCar;
        this.idPerson=idPerson;
        this.createdate=createdate;
    }

    description=()=>{
        let description="";
        description+=" ID buy: "+this.idBuy+",";
        description+=" ID car: "+this.idCar+",";
        description+=" ID person: "+this.idPerson+",";
        description+=" Purchase Date: "+this.createdate;
        return description;

        }
    }

    export default Buy;