"use strict";
class Book {
    constructor(data) {
        this.data = data;
    }
    write(str) {
        this.data += str;
    }
    read() {
        return this.data;
    }
}
const b1 = new Book("hello");
console.log(b1.read());
b1.write(" Added new content. ");
console.log(b1.read());
b1.write("And even more content.");
console.log(b1.read());
