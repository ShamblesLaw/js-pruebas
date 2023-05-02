
class Celular {
    constructor(color,peso,tamaño,rdc,ram) {
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }

    presionarBotonEncendido(){
        if (this.encendido == false) {
            alert("celular encendido");
            this.encendido = true;
        } else {
            alert("celular apagado");
            this.encendido = false;
        }
    }

    reiniciar(){
        if (this.encendido == true) {
            alert("reiniciando celular");
        } else {
            alert("el celular está apagado");
        }
    }

    tomarFoto(){
        alert(`se tomó la foto; resolucion ${this.resolucionDeCamara}`);
    }

    grabarVideo(){
        alert(`video grabado en: ${this.tamaño}`);
    }

    mobileInfo(){
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamaño}</b></br>
        Memoria RAM:  <b>${this.memoriaRam}</b></br>
        Resolución de Video: <b>${this.resolucionDeCamara}</b></br>
        `;
    }
}


class CelularAltaGama extends Celular{
    constructor(color,peso,tamaño,ram,rdc,rdce) {
        super(color,peso,tamaño,ram,rdc,rdce);
        this.resolucionDeCamaraExtra = rdce;
    }

    grabarVideoLento(){
        alert("Estas grabando en cámara lenta")
    }

    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial")
    }

    infoAltaGama(){
        return this.mobileInfo() + `Resolución de Cámara Extra: ${this.resolucionDeCamaraExtra}`;
    }
}

// celular1 = new Celular("rojo","150g","5'","hd","1GB");
// celular2 = new Celular("negro","155g","5.4'","full hd","2GB");
// celular3 = new Celular("azul","146g","5.9'","full hd","2GB");

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

celular1 = new CelularAltaGama("rojo","130g","5.2","4k","3gb","full hd");
celular2 = new CelularAltaGama("azul","142g","6","4k","4gb","hd");


document.write(`
    ${celular1.infoAltaGama()} <br><br>
    ${celular2.infoAltaGama()} <br>
`);


