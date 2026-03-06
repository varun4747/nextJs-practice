import { useState, useEffect } from "react";
interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  designation: string;
  salary: number;
  city: string;
}
function UseEffectPractice() {
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     console.log("count changed", count)
    // }, [count])
    // return (
    //     <div>
    //         <h3>UseEffect practice</h3>
    //         <h4>{count}</h4>
    //         <button className="btn btn-success"onClick={(() => {
    //             setCount(count + 1)
    //         })}>increase</button>
    //         <button className="btn btn-danger" onClick={(()=>{setCount(0)})}>reset</button>
    //     </div>
    // );
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        employeeData();
    }, [])
    const employeeData = async () => {
        const response = await fetch("http://localhost:4000/Employees");
        const data = await response.json();
        setEmployee(data);
    }
    return (
        <div className="container">
            {employee.map((emp:Employee,index:number)=>(
                <ul key={index}>
                <li>{emp.id}</li>
                <li>{emp.lastName}{emp.lastName}</li>
                <li>{emp.department}</li>
                <li>{emp.email}</li>
                <li>{emp.salary}</li>
                <li>{emp.city}</li>               
                </ul>
            ))}
        </div>
    );
}
export default UseEffectPractice;