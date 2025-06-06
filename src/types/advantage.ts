// Partial
interface ITodo {
    title: string;
    description: string;
}

const todo1: ITodo = {
    title: "organize desk",
    description: "clear clutter",
}

const todo2: Partial<ITodo> = {
    description: "clear clutter"
}

// Omit
interface IBook {
    id: number;
    title: string;
    author: string;
    price: number;

}

type BookType2 = Omit<IBook,"title" | "id">

//Pick
interface IBook2 {
    id: number;
    title: string;
    author: string;
    price: number;
}

type BookType = Pick<IBook2,"author" | "price">

// Generic
const printVariable = <T>(data:T): T => {
    return data;
}

printVariable<string>("ssss");


// keyof

const person: IPerson = {
    name: "John",
    age: 30
}
type PersonKey = keyof IPerson;
const key: PersonKey = "name";

// type of
const person2 = {
    name: "John",
    age: 30
}
type Person2Type = typeof person2;

// Map type

interface IPerson {
    name: string;
    age: number
}
type MapType<T> = {
    [P in keyof T]?: T[P]
}

type demo = MapType<IPerson>


