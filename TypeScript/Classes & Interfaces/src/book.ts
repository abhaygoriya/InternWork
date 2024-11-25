//Task 2
interface Readable {
  read(): string;
}

interface Writable extends Readable {
  write(str: string): void;
}

class Book implements Writable {
  constructor(private data: string) {}

  write(str: string): void {
    this.data += str;
  }

  read(): string {
    return this.data;
  }
}

const b1 = new Book("hello");

console.log(b1.read());

b1.write(" Added new content. ");
console.log(b1.read());

b1.write("And even more content.");
console.log(b1.read());
