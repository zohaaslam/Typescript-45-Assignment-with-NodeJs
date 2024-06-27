//Q45:// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

type Car ={
    manufacturer:string,
    modelName:string,
    [key:string]:any;
}

function carInfo(manufacturer:string,modelName:string,options:Partial<Car>):Car{
    return{

        manufacturer:manufacturer,
        modelName:modelName,
        ...options

    }

    


}
let my_car = carInfo("Toyota","5858",{Color:'blue',model:'2022' })
console.log(my_car);

