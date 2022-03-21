class Nodo{
    constructor(id,nombre){
        this.id = id;
        this.nombre=nombre;
        this.arraynodos=[]
        this.arraydista=[]
    }
    addnodo(nodo, distancia){
        this.arraynodos.push(nodo);
        this.arraydista.push(distancia);
        nodo.arraynodos.push(this);
        nodo.arraydista.push(distancia);
    }
    verNodosAdy(){
    var cadena="";
    for (var i=0;i<this.arraydista.length;i++){
        cadena=cadena+this.nombre+" está unido al "+this.arraynodos[i].nombre+ " con una distancia de "+this.arraydista[i]+" unidades <br>";}
    console.log(cadena);
    return cadena;}
}

let nodo1= new Nodo(1,'nodo1');
let nodo2=new Nodo(2,'nodo2');
let nodo3=new Nodo(3,'nodo3');
let nodo4=new Nodo(4,'nodo4');
document.getElementById('uno').innerHTML=nodo1.id+" "+nodo1.nombre;
document.getElementById('dos').innerHTML=nodo2.id+" "+nodo2.nombre;
nodo1.addnodo(nodo2,5);
document.getElementById('tres').innerHTML=nodo1.arraynodos[0].nombre+" "+nodo1.arraynodos[0].id;
document.getElementById('cuatro').innerHTML=nodo2.arraynodos[0].nombre+" "+nodo2.arraynodos[0].id;
document.getElementById('cinco').innerHTML=nodo1.nombre+" está unido al "+nodo1.arraynodos[0].nombre+ " con una distancia de "+nodo1.arraydista[0];
document.getElementById('seis').innerHTML=nodo2.nombre+" está unido al "+nodo2.arraynodos[0].nombre+ " con una distancia de "+nodo2.arraydista[0];
nodo3.addnodo(nodo4,10);
nodo3.addnodo(nodo1,3);
nodo3.addnodo(nodo2,12);
document.getElementById('siete').innerHTML=nodo3.verNodosAdy();

document.getElementById('ocho').innerHTML=nodo1.verNodosAdy();
