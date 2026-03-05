import Greeting from "@/Components/Greeting";
function page(){
  return(
    <>
    <div>
      <Greeting id={1}  email="hello@example.com" password="password123" />
      </div>
      </>
  );
}
export default page;