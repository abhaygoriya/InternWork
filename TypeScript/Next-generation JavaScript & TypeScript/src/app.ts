//Task 1 concat array and object using spread operator
const arr1: number[] = [1, 2, 3, 4];
const arr2: number[] = [1, 2, 5];

const obj1 = { id: 1, name: "Mohan" };
const obj2 = { age: 20, country: "IND" };

const newArr = [...arr1, ...arr2];
const newObj = { ...obj1, ...obj2 };

console.log("New Array : ", newArr);
console.log("New Object : ", newObj);

//Task 2

// Return student mark greater than 70
const students: { id: number; name: string; collage: string; marks: number }[] =
  [
    {
      id: 1,
      name: "Mohan",
      collage: "VVP",
      marks: 60,
    },
    {
      id: 2,
      name: "Rakesh",
      collage: "VVP",
      marks: 71,
    },
    {
      id: 3,
      name: "Manohar",
      collage: "GECR",
      marks: 80,
    },
    {
      id: 4,
      name: "Rohan",
      collage: "GECR",
      marks: 70,
    },
    {
      id: 5,
      name: "Mohit",
      collage: "DARSHAN",
      marks: 31,
    },
  ];

const studentMarkGreaterThan70 = (
  students: { id: number; name: string; collage: string; marks: number }[]
) => {
  return students.filter((student) => student.marks > 70);
};

console.log(
  "Student Mark Greater Than 70 : ",
  studentMarkGreaterThan70(students)
);

//Return students name
const nameOfStudents = (
  students: { id: number; name: string; collage: string; marks: number }[]
) => {
  return students.map((student) => student.name);
};

console.log("Student Name", nameOfStudents(students));

//Return
const addResultAttribute = (
  students: {
    id: number;
    name: string;
    collage: string;
    marks: number;
  }[]
) => {
  return students.map((student) => ({
    ...student,
    result: student.marks > 33 ? "Pass" : "Fail",
  }));
};

console.log("Student With Result Field", addResultAttribute(students));

//Task 3
const products = [
  { name: "Mobile", stock: 3, original: 4000 },
  { name: "Laptop", stock: 1, original: 10000, discount: 0.1 },
  { name: "Mouse", stock: 4, original: 299.99 },
  { name: "Keyboard", stock: 1, original: 299.99, discount: 0.8 },
  { name: "Headphone", stock: 2, original: 199.99, discount: 0.65 },
];

function calculateSalePriceAndTotals() {
  const newProduct: {
    name: String;
    stock: number;
    original: number;
    discount: number;
    sale: number;
    total: number;
  }[] = [];
  for (const product of products) {
    let { name, stock, original, discount = 0 } = product;
    const sale = original - original * discount;
    const total = sale * stock;

    newProduct.push({
      discount,
      name,
      original,
      sale,
      stock,
      total,
    });
  }
  return newProduct;
}

console.log("Product With Sale And Total", calculateSalePriceAndTotals());
