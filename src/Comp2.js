import React from "react";
import { useState } from "react";

function Comp2() {
    const person1 = {
        name: "Om Prakash Mallik",
        age: 23,
        place: "Darbhanga"
    }
    const [person, setPerson] = useState(person1);
    return (
        <div>
            <h1 className="font-bold text-4xl text-blue-500 text-center py-5">
                My name is {person.name} and i am {person.age} years old and i from {person.place}.
            </h1>
        </div>
    )
}

export default Comp2;
