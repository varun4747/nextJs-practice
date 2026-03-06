import { useState } from "react";
function UseStatePractice() {
    const [employee, setEmployee] = useState([
        {
            name: "ramu",
            age: 25,
            city: "hyd"
        },
        {
            name: "kiran",
            age: 27,
            city: "vizag"
        }
    ]);
    const addEmployee = (() => {
        const newEmployee={
            name:"fathima",
            age:22,
            city:"mumbai"
        };
        setEmployee([...employee,newEmployee])
    });

    return (
        <>
            <div>
                {employee.map((emp, index) => (<h4 key={index}>
                   name: {emp.name}
                   age: {emp.age}
                  city:  {emp.city}
                    </h4>))}
                <button className="btn btn-primary" onClick={addEmployee}>Add Employee</button>
            </div>
        </>
    );
}
export default UseStatePractice;