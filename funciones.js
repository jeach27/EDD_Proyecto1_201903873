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
        this.canciones = new ListaS();
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
var admin = new Usuario("2654568452521", "Oscar Armin", "EDD", "123", "+502 (123) 123-4567", true);
listaUsuarios.append(admin);

var listaDobleArtistas = new ListCD();

var arbolPodcast = new treeB();
/*
var tempP1 = new Podcast("Auan1", "topic", "guests", "duration");
var tempP2 = new Podcast("Dateo", "topic", "guests", "duration");
var tempP3 = new Podcast("Coaq", "topic", "guests", "duration");
var tempP4 = new Podcast("Buincho", "topic", "guests", "duration");
var tempP5 = new Podcast("Eldair", "topic", "guests", "duration");
arbolPodcast.append("Auan1",tempP1);
arbolPodcast.append("Dateo",tempP2);
arbolPodcast.append("Coaq",tempP3);
arbolPodcast.append("Buincho",tempP4);
arbolPodcast.append("Eldair",tempP5);
*/

function mostrar(id) {
    if(document.getElementById(id).style.display == 'none'){

        document.getElementById(id).style.display = 'block';
        

    }else{

        document.getElementById(id).style.display = 'block';
        
    }
}

function ocultar(id) {
    if(document.getElementById(id).style.display == 'block'){

        document.getElementById(id).style.display = 'none';
        

    }else{

        document.getElementById(id).style.display = 'none';
        
    }
}

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
            var dpi = item.dpi;
            var name = item.name;
            var username = item.username;
            var pass = item.password;
            var phone = item.phone;
            var admin = item.admin;
            var tempU = new Usuario(dpi, name, username, pass, phone, admin);
            listaUsuarios.append(tempU);
        }
        listaUsuarios.display();
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
            var name = item.name;
            var age = item.age;
            var country = item.country;
            var tempA = new Artista(name, age, country);
            listaDobleArtistas.append(tempA)
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
            var artist = item.artist;
            var name = item.name;
            var duration = item.duration;
            var gender = item.gender;
            var tempC = new Cancion(artist, name, duration, gender);
            var listaCanciones = listaDobleArtistas.look3(artist);
            listaCanciones.append(tempC);
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
            var month = item.month;
            var day = item.day;
            var song = item.song;
            var artist = item.artist;
            var tempM = new Musica(month, day, song, artist);
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
            var name = item.name;
            var topic = item.topic;
            var guests = item.guests;
            var duration = item.duration;
            var tempP = new Podcast(name, topic, guests, duration);
            arbolPodcast.append(name,tempP);
        }
    };
    lector.readAsText(archivo);

}

//Boton de Login
document.getElementById('login1').addEventListener('click',function(e){
    e.preventDefault();
    var user = document.getElementById('user').value;
    var pass = document.getElementById('password').value;

    document.getElementById('user').value = "";
    document.getElementById('password').value = "";

    if (document.getElementById("checkAdmin").checked) {
        var ver = listaUsuarios.look2(user,pass);
        //Administrador
        if (ver == true) {
            ocultar('login');
            mostrar('CSesion');
            mostrar('admin');
            

        }else{
            alert(ver);
        }
    }else{
        //Usuario Comun
        var ver = listaUsuarios.look3(user,pass);
        if (ver == true) {
            ocultar('login');
            ocultar('registrar');
            mostrar('CSesion');
            mostrar('usuario');

        }else{
            alert(ver);
        }
    }
});
//Boton de ir al Registro
document.getElementById('registrar').addEventListener('click', function(e){
    e.preventDefault();
    ocultar('login');
    ocultar('registrar');
    ocultar('admin');
    mostrar('registro');
});
// Boton de registrar
document.getElementById('registro1').addEventListener('click', function(e){
    e.preventDefault();
    var user = document.getElementById('user1').value;
    var name = document.getElementById('name1').value;
    var dpi = document.getElementById('dpi1').value;
    var phone = document.getElementById('phone1').value;
    var pass = document.getElementById('password1').value;

    if (user && name && dpi && phone && pass){
        document.getElementById('user1').value = "";
        document.getElementById('name1').value = "";
        document.getElementById('dpi1').value = "";
        document.getElementById('phone1').value = "";
        document.getElementById('password1').value = "";
        var newU = new Usuario(dpi, name, user, pass, phone, false);
        listaUsuarios.append(newU);
        listaUsuarios.display();
        ocultar('registro');
        mostrar('CSesion');
        mostrar('usuario');
    }else{
        alert("Ingrese todos los datos");
    }
});
//Boton de Cancelar Registro
document.getElementById('Cregistro1').addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('user1').value = "";
    document.getElementById('name1').value = "";
    document.getElementById('dpi1').value = "";
    document.getElementById('phone1').value = "";
    document.getElementById('password1').value = "";
    ocultar('registro');
    mostrar('login');
    mostrar('registrar');
});
//Boton de Cerrar Sesion 
document.getElementById('CSesion').addEventListener('click', function(e){
    e.preventDefault();
    ocultar('registro');
    ocultar('CSesion');
    ocultar('admin');
    ocultar('usuario');
    mostrar('login');
    mostrar('registrar');

});
//Botones de Carga Masiva 
document.getElementById('cargaUsuarios').addEventListener('change', leerArchivoUsuarios, false);
document.getElementById('cargaArtistas').addEventListener('change', leerArchivoArtistas, false);
document.getElementById('cargaCanciones').addEventListener('change', leerArchivoCanciones, false);
document.getElementById('cargaPodcast').addEventListener('change', leerArchivoPodcast, false);
document.getElementById('cargaMusica').addEventListener('change', leerArchivoMusica, false);

//Botones de GraficasAdmin
document.getElementById('gUsuarios').addEventListener('click', function(e){
    document.getElementById('mostrarGU').innerHTML = '';
    document.getElementById('mostrarGA').innerHTML = '';
    document.getElementById('mostrarGM').innerHTML = '';
    document.getElementById('mostrarGP').innerHTML = '';
    listaUsuarios.graph();
});
document.getElementById('gArtistas').addEventListener('click', function(e){

});
document.getElementById('gMusica').addEventListener('click', function(e){

});
document.getElementById('gPodcast').addEventListener('click', function(e){
    document.getElementById('mostrarGU').innerHTML = '';
    document.getElementById('mostrarGA').innerHTML = '';
    document.getElementById('mostrarGM').innerHTML = '';
    document.getElementById('mostrarGP').innerHTML = '';
    arbolPodcast.graph();
    //arbolPodcast.postOrder();
});

