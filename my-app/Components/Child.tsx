interface users {

    id: number;
    name: string;
    position: string;
    salary: number;
    createdAt: string;
}
interface ChildProps {
    users: users;
}

export default function Child({ users }: ChildProps) {
    return (
        <>
            <div>
                <ul>
                    <li>{users.id}</li>
                    <li>{users.name}</li>
                    <li>{users.position}</li>
                    <li>salary:{users.salary}</li>
                    <li>{users.createdAt}</li>
                </ul>



            </div>
        </>
    );
}