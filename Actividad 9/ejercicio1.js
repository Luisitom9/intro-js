/**
 * Del siguiente objeto:
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };

 */
/*    1. Muestra en pantalla el valor de la propiedad name mediante dot notation */
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
student.name
/*     2. Muestra en pantalla el valor de la propiedad age mediante bracket notation */
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
};
student['age']
/*    3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"*/
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
};
student['name']='Steve Jobs'
/**
 * Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
    Objeto de muestra:

    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
 */
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    var {name,sclass,rollno}= student;
    console.log(`1.- ${name}, 2.- ${sclass}, 3.- ${rollno}`)

/**
 * Verifica si la propiedad name se encuentra dentro del siguiente objeto:
     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
*/
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
if (student.hasOwnProperty("name"))
console.log("El objeto tiene la propiedad Nombre");
else
document.write("El objeto NO tiene la propiedad Nombre");


/** Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto. 
 * Imprima también el objeto antes o después de eliminar la propiedad. 
 * Objeto para usar:
 * var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
*/
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log(student.rollno);
delete student.rollno;
console.log(student.rollno);

/**
 * Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto:
 * 
    * var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
La nueva edad debe ser 35.
 */ 
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
};
student['age']='35'


/**
 * Escriba un programa para añadir una nueva propiedad al siguiente objeto:
 * var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };

    La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.
 */
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
    student ['pet'] = 'dog'  //  Object.defineProperty(student, 'pet',{
                            //   enummerable:true, 
                             //  value:'cat'}) 

/**
 * Crea un código para llenar un objecto vacio:
 * 
 * const objeto = {}
 * 
 * Con las siguiente propiedades:
    * color
    * tamaño
    * peso
    * cantidad
    * 
*/
const objeto = {}
Object.defineProperty(objeto, 'color', {value: 'azul', writable:true,
enumerable:true, configurable:true});
Object.defineProperty(objeto, 'tamaño', {value: 'grande', writable:true,
enumerable:true, configurable:true});
Object.defineProperty(objeto, 'peso', {value: 30 , writable:true,
enumerable:true, configurable:true});
Object.defineProperty(objeto, 'cantidad', {value: 5, writable:true,
enumerable:true, configurable:true});
