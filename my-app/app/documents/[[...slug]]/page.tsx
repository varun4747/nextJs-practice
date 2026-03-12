import { notFound } from "next/navigation";
function docs({ params }: { params: { slug:string } }){
    

        return(
        <h2>This is {params.slug} page</h2>)
    }
    
    

export default docs;