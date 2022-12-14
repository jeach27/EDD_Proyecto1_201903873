export class NodeLS{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

export class ListaS{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(data){
        var temp = new NodeLS(data);
        if (this.head == null) {
            this.head = temp;
            this.size++;
        } else {
            var aux = this.head;
            while (aux.next != null) {
                aux = aux.next;
            }
            aux.next = temp;
            this.size++;            
        }
    }

    display(){
        var aux = this.head;
        while (aux != null) {
            console.log(aux.data.dpi);
            aux = aux.next;
        }
    }

    look2(user, pass){
        var aux = this.head;
        while (aux != null) {
            var us = aux.data.username;
            var pas = aux.data.password;

            if(user == us){
                if(pass == pas){
                    if (aux.data.admin == true) {
                        return true;
                    }
                    if (aux.data.admin != true){
                        return "El usuario no es Administrador";
                    }
                }else{
                    return "La contraseña es incorrecta";
                }   
            }
            aux = aux.next;
        }
        return "no se ha encontrado este usuario"
        
    }

    look3(user, pass){
        var aux = this.head;
        while(aux != null){
            var us = temp.data.username;
            var pas = temp.data.password;

            if(user == us){
                if(pass == pas){
                    if (aux.data.admin != true) {
                        return true;
                    }
                    if (aux.data.admin == true){
                        return "El usuario es Administrador";
                    }
                }else{
                    return "La contraseña es incorrecta";
                }   
            }
            aux = aux.next;
        }
        return "no se ha encontrado este usuario"

    }
}