class NodeS{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

export class Stack{
    constructor(){
        this.top = null;
    }

    push(data){
        var temp = new NodeS(data);
        if(this.top == null){
            this.top = temp;
        }else{
            temp.next = this.top;
            this.top = temp;
        }
    }

    pop(){
        if(this.top == null){
            console.log('No hay elementos en la pila');
        }else{
            var temp = this.top;
            this.top = this.top.next;
            return temp;
        }
    }

    display(){
        var temp = this.top;
        while(temp != null){
            console.log(temp.data);
            temp = temp.next;
        }
    }

    graph(cont){
        var code = `digraph G{\ngraph [pad="0.5", nodesep="0.5", ranksep="2"];
        \nnode [shape=plain]
        \nlabel = Pila
        \nrankdir=LR;
        \nFoo [label=<
        \n<table border="0" cellborder="1" cellspacing="0">\n`;
        var lim = 1
        while(lim<=cont){
            code += "<tr>\n";
            code += "<td>"+lim+"</td>";
            code += "</tr>\n";
            lim++;
        }
        
        
        code += `</table>>];\n}`;

        console.log(code);
        d3.select("#mostrarPila").graphviz()
            .width(2350)
            .height(200)
            .renderDot(code)

    }
}