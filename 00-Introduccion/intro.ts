//esto es el priemr ejemplo de typeScript vamos a paracticar la inferencia

const persona = {
    name : "Juan",
    age : 30,
}

persona.name = "Pedro";
 // pero no se podria poner persona.adfsdfs  ya que no esta definido
 // si se puede poner persona.name = 30; ya que el tipo de dato no es el mismo y no esta definido

 //typescript por normal general infiere el tipo de varibale que es pero cuando esete no es el caso en este caso se pondria un let cualquerValor : any = "hola"; ya que no se sabe el tipo de dato que es
 // si se pone let cualquerValor : any = "hola"; y se pone cualquerValor = 100; no daria error ya que any puede ser cualquier cosa
 let cualquerValor : any = "hola";
 cualquerValor = 100;
 // a diferencia del any el uknow es cuando no sabes ciertamente que tipo es ¡mucho cuidado! de todas forma es any nunca se recomienda usar
    let cualquerValor2 : unknown = "hola";
//la inferencia tiene un limite por ejemplo

function saludar(name : string){
    console.log("Hola" + name);
}
//pero si en cambio de poner strng lo dejamos sin poner nada typescript lo infiere como any y eso no dara fallo pero si estara mal ya que no se sabe que tipo de dato es
//en este caso saludar("Pepe") no daria error ya que cumple con esta funcion pero si ponemos saludar(1) daria error ya que no cumple con la funcion

//hay un caso que es cuand ose prentende usar una funcion con un objeto
function saludarObjetos({name, age }){ //aqui esta mal ya que al no especificar el tipo de dato typescript lo infiere como any y no dara error pero no es correcto
    //estaria mal tambien hacer  {name : string, age : numbre } ya que genera un conficto con la estructura de javascript
    //la forma correcta seria {name, age } : {name : string, age : number } ya que  asi defines el tipo de cosa que es
    //tambien se puede hacer (persona : {name : string, age : number }) pero no es lo mas comun ya que te obliga a sacar cada parametro de persona
    console.log("Hola  ${name} tienes ${age} años");

}
//typescript sabe que tipo de dato se devuelve por ejemplo en saludar si haces un return edad sabra que el tipo de return es un numero por lo que imagina que hacemos
//let username : string = saludar("Pepe"); no daria error ya que cumple con la funcion
saludarObjetos(persona); //esto funciona ya que cumple
