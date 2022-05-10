export default class Data{

    
    api(path,method='GET',body=null){


        const url="http://localhost:8452"+path;
 
 
        const options={
 
             method,
             headers:{
 
                'Content-Type':'application/json;chartset=utf-8',
             }
        }
 
 
        if(body!=null){
 
                 console.log("aici");
 
            options.body=JSON.stringify(body);
        }
 
 
        return fetch(url,options);
     }

     async cars(){

        const response= await this.api('/api/v1/cars/allCars');
 
        const data = await response.json();
 
        return data;
 
     }

     async addCar(car){

        const response = await this.api('/api/v1/persons/addCarsByIDPers/1','POST',car);

        if(response.status==202){

            return "Este ok";
        }else{

            return "";
        }



    }

    async updateCar(car){
        const response = await this.api('/api/v1/cars/updateCars','PUT',car);
        if(response.status==202){

            return "Este ok";
        }else{

            return "Eroare la update car";
        }
    }

    async deleteByCarID(id){
        const response = await this.api(`/api/v1/cars/deleteCar/${id}`,'DELETE');
        if(response.status==202){
            return  "Masina a fost stearsa";
        }else{
            return"Masina nu s-a sters";
            }

    }



}