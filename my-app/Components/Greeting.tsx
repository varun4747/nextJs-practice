interface GreetingProps {
    name: string;
}
function Greeting(props: GreetingProps) {
    return (
        <>
        <div>
            <h1>{props.name}</h1>;
        </div>
        </>
    );
    
}
export default Greeting;