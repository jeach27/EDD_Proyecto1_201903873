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
        while (aux.next != null) {
            console.log(aux.data);
            aux = aux.next;
        }
    }
}