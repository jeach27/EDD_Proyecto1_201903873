import { ListaS } from "./ListaSimple.js";
import { ListCD } from "./ListaCircularDoble.js";
import { Stack } from "./Pila.js";
import { Queue } from "./Cola.js";
import { treeB } from "./ArbolBinario.js";

class Usuario{
    constructor(dpi, name, username, pass, phone, admin){
        this.dpi = dpi;
        this.name = name;
        this.username = username;
        this.password = pass;
        this.phone = phone;
        this.admin = admin;
    }
}

class Artista{
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }
}

class Cancion{
    constructor(artist, name, duration, gender){
        this.artist = artist;
        this.name = name;
        this.duration = duration;
        this.gender = gender;
    }
}

class Musica{
    constructor(month, day, song, artist){
        this.month = month;
        this.day = day;
        this.song = song;
        this.artist = artist;
    }
}

class Podcast{
    constructor(name, topic, ghests, duration){
        this.name = name;
        this.topic = topic;
        this.guests = ghests;
        this.duration = duration;
    }
}

var listaUsuarios = new ListaS();
var user = new Usuario("3443", "dasdsa", "dasd", "dadsad", "dasda");
var user2 = new Usuario("34432", "dasdsa", "dasd", "dadsad", "dasda");
listaUsuarios.append(user);
listaUsuarios.append(user2);
listaUsuarios.display();


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

