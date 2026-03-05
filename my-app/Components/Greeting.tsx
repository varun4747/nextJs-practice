interface GreetingProps {
    id:number;
    name?: string;
    email:string;
    password:string;
}
function Greeting({id,name="Guest",email,password}: GreetingProps) {
    return (
        <>
        <div>
            <h4>Id: {id}</h4>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
        </div>
        </>
    );
    
}
export default Greeting;