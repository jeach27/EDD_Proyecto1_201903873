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
var admin = new Usuario("2654568452521", "Oscar Armin", "EDD", "123", "+502 (123) 123-4567", true);
listaUsuarios.append(admin);
listaUsuarios.display();

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

        }else{
            alert(ver);
        }
    }
});

document.getElementById('registrar').addEventListener('click', function(e){
    e.preventDefault();
    ocultar('login');
    ocultar('registrar');
    mostrar('registro');
});

document.getElementById('registro1').addEventListener('click', function(e){
    e.preventDefault();
    var user = document.getElementById('user1').value;
    var name = document.getElementById('name1').value;
    var dpi = document.getElementById('dpi1').value;
    var phone = document.getElementById('phone1').value;
    var pass = document.getElementById('password1').value;

    if (!user) {
        alert("Ingrese Nombre Usuario");
        if(!name){
            alert("Ingrese Nombre Completo");
            if (!dpi) {
                alert("Ingrese DPI");
                if (!phone) {
                    alert("Ingrese telefono");
                    if (!pass) {
                        alert("Ingrese Contraseña");
                    }else{
                        document.getElementById('user1').value = "";
                        document.getElementById('name1').value = "";
                        document.getElementById('dpi1').value = "";
                        document.getElementById('phone1').value = "";
                        document.getElementById('password1').value = "";
                        ocultar('login');
                        ocultar('registrar');
                        ocultar('registro');
                        mostrar('CSesion');
                        mostrar('usuario');

                    }
                }
            }
        }
    }
    
    
});

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

