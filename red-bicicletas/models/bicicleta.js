var Bicicleta = function(id, color, modelo, ubicacion){
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function(){
    return 'id:' + this.id + '| color:' + this.color;
}

Bicicleta.allBicis = [];
Bicicleta.add = function(allBicis){
    Bicicleta.allBicis.push(allBicis);
}

Bicicleta.findByid = function(aBiciId){
    var aBici = Bicicleta.allBicis.find(x => x.id == aBiciId);
    if(aBici)
        return aBici;
    else
        throw new Error(`No existe una Bicicleta con el id ${aBiciId}`);
}

Bicicleta.removeById = function(aBiciId){
    for(var i = 0; i < Bicicleta.allBicis.length; i++){
        if(Bicicleta.allBicis[i].id == aBiciId){
            Bicicleta.allBicis.splice(i, 1);
            break;
        }
    }
}

var a  = new Bicicleta(1, 'Blanco', 'Urbana', [4.6530513,-74.0549981]);
var b = new Bicicleta(2, 'Negro', 'Mountain', [4.6510618,-74.0574783]);
var c = new Bicicleta(2, 'Negro', 'Mountain', [4.6532742,-74.0567416]);

Bicicleta.add(a);
Bicicleta.add(b);
Bicicleta.add(c);
module.exports = Bicicleta;