export class NodeCD{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

export class ListCD{
    constructor(){
        this.head = null;
        this.last = null;
        this.size = 0;
    }

    append(data){
        var temp = new NodeCD(data);
        if(this.head == null){
            this.head = temp;
            this.last = this.head;
            this.size++;
        }else{
            temp.next = this.head;
            this.head.prev = temp;
            this.last.next = temp;
            temp.prev = this.last;
            this.last = temp;
            this.size++;
        } 
    }

    display(){
        var temp = this.head;
        var cont = 0;
        while(cont < this.size){
            console.log(temp.data);
            temp = temp.next;
            cont++;
        }
    }

    

    look3(book){
        var temp = this.head;
        var cont = 0;
        while(cont < this.size){
            var libro = temp.data.nameB;
            if(libro == book){
                return temp.data.amount;

            }else{
                temp = temp.next;
                cont++;

            }
                
        }
        return "no se ha encontrado este libro"

    }
    
    graph(){
        var code = "digraph G{\nlabel= \"List D\"\nrankdir=LR \n node [shape=box];\n";
        var temp = this.head;
        var connect = "";
        var nodes = "";
        var contNodes = 0;
        while(temp != this.last ){
            nodes+= "N" + contNodes + "[label=\"" + temp.data.name + "\" ];\n";
            if(temp.next != this.head){
                var aux = contNodes+1;
                connect+= "N" + contNodes + " -> N" + aux + " [dir=both];\n";
            }
            temp = temp.next;
            contNodes++;
        }
        nodes+= "N" + contNodes + "[label=\"" + temp.data.name + "\" ];\n";
        //connect+= "N" + contNodes + " -> N0 [dir=both];\n";
        code += "//agregando nodos\n";
        code += nodes+"\n";
        code += "//agregando conexiones o flechas\n";
        code += "\n"+connect+"\n}";
        console.log(code);
        d3.select("#TopPeople").graphviz()
            .width(2350)
            .height(200)
            .renderDot(code)
    }

   
    

}