//funciones dentro de objetos

const reproductor = {
    cancion : '',
    reproducir:  (id) => console.log(`Reproduciendo cancion con el id= ${id}`),
    pausar:  () => console.log('pausando...'),
    borrar:  id => console.log(`borrando cancion... ${id}`),
    crearPlaylist:  nombre => console.log(`Creando playlist: ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo playlist: ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log('Agregando cancion');
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.pausar();

/* //tambien se puede a;adir desde fuerda de objeto
reproductor.borrar = function (id) {
    console.log(`borrando cancion... ${id}`)
}
 */
reproductor.borrar(20);
reproductor.crearPlaylist('Yahoo');
reproductor.reproducirPlaylist('Yahoo');