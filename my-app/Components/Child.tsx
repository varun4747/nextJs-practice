interface ChildProps {

    sendMessage: (data: string) => void;
}
export default function Child({ sendMessage }: ChildProps) {
    return (
        <>
            <div>


                <button className="btn btn-success " onClick={() => sendMessage("Hello from child!")}>click</button>
            </div>
        </>
    );
}