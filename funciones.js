


function leerArchivoUsuarios(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    var lector = new FileReader();
    lector.onload = function(e) {
        var contenido = e.target.result;
        let intern = JSON.parse(contenido);
        for(let item of intern) {
            console.log(item.username);
        }
    };
    lector.readAsText(archivo);

}

function leerArchivoArtistas(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    var lector = new FileReader();
    lector.onload = function(e) {
        var contenido = e.target.result;
        let intern = JSON.parse(contenido);
        for(let item of intern) {
            console.log(item.name);
        }
    };
    lector.readAsText(archivo);

}

function leerArchivoCanciones(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    var lector = new FileReader();
    lector.onload = function(e) {
        var contenido = e.target.result;
        let intern = JSON.parse(contenido);
        for(let item of intern) {
            console.log(item.artist);
        }
    };
    lector.readAsText(archivo);

}

function leerArchivoMusica(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    var lector = new FileReader();
    lector.onload = function(e) {
        var contenido = e.target.result;
        let intern = JSON.parse(contenido);
        for(let item of intern) {
            console.log(item.month);
        }
    };
    lector.readAsText(archivo);

}

function leerArchivoPodcast(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    var lector = new FileReader();
    lector.onload = function(e) {
        var contenido = e.target.result;
        let intern = JSON.parse(contenido);
        for(let item of intern) {
            console.log(item.topic);
        }
    };
    lector.readAsText(archivo);

}

