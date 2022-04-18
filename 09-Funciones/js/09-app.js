//funciones dentro de objetos

const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo cancion con el id= ${id}`);
    },
    pausar: function () {
        console.log('pausando...')
    },
    borrar: function (id) {
        console.log(`borrando cancion... ${id}`)
    },
    crearPlaylist: function (nombre) {
        console.log(`Creando playlist: ${nombre}`);
    },
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo playlist: ${nombre}`)
    }
}

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