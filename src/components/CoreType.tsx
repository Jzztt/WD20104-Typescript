/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const CoreType = () => {
  // string
  const name: string = "John Doe";
  // number
  const age: number = 30;
  // boolean
  const isStudent: boolean = false;
  // any
  const variableAny: any = "Hello";
  // Tuple
  const variableTuple: [string, number] = ["John", 30];
  // Array
  const variableArr: number[] = [1, 2, 3, 4, 5];
  const favoriteFoods: string[] = ["noddle", "pizza", "rice"];

  // Enum
  enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
  }
  const role: Role = Role.ADMIN;

  // literal type
  // Chỉ cho phép biến có giá trị là "Hello" hoặc "Hi"
  type Greeting = "Hello" | "Hi";
  const greeting: Greeting = "Hello";

  // union type
  // Chỉ cho phép biến có kiểu dữ liệu là string hoặc number
  type ProductIdType = string | number;
  const productId: ProductIdType = "12345";

  // unknown type
  // unknown là một kiểu dữ liệu an toàn hơn any
  // unknown không thể xác định được kiểu dữ liệu của nó
  const print = (value: unknown) => {
    // Unknown phải check kiểu dữ liệu trước khi sử dụng
    // any thì không cần check
    if (typeof value === "string") {
      console.log(value.toLowerCase());
    }
  };
  print("Hello");

  interface IPerson {
    name: string;
    age: number;
    getInfo: () => void;
  }
  interface IPerson2 extends IPerson {
    description: string;
  }

  type PersonType = {
    name: string;
    age: number;
    getInfo: () => void;
  }

  // Object
  const person: IPerson2 = {
    // key: value
    name: "John",
    age: 30,
    description: "This is a person",
    getInfo: () => {
      console.log(`Name: ${person.name}, Age: ${person.age}`);
    },
  };

  return (
    <>
      <div>
        {" "}
        {name} {age} {isStudent} {variableAny} {greeting} {productId}
      </div>
      <div>
        {" "}
        {variableTuple[0]} {variableTuple[1]}
      </div>
      <h2> Món Ăn Yêu Thích</h2>
      <ul>
        {favoriteFoods.map((food) => (
          <li>{food}</li>
        ))}
      </ul>
    </>
  );
};

export default CoreType;
