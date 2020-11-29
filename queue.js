class Queue{
    constructor(){
        this.storage = {}
        this.head = 0
        this.tail = 0
    }

    enqueue(element){
        this.storage[this.tail] = element;
        this.tail++;
    }

    dequeue(){
        delete this.storage[this.head];
        this.head++;
    }

    print(){
        console.log(queue)
    }
}

let queue = new Queue();

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print();

queue.dequeue();
queue.print();