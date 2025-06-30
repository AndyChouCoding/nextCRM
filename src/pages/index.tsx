import Button from "@/components/Buttons";



export default function Home() {
  return (
    <div className="flex justify-center">
        <div className=" mt-[40vh] bg-amber-200 p-4">
          <div className="flex justify-end mb-10">
            <label className=" p-2" htmlFor="username">UserName</label>
            <input className="border-1 p-1" id="username" type="text"  />
          </div>
          <div className="flex justify-end mb-10">
            <label className=" p-2" htmlFor="password">Password</label>
            <input className="border-1 p-1" id="password" type="password" />
          </div>
          <div className="flex justify-end">
            <Button variant={"Login"} onClick={()=>{console.log("login")}}>Login</Button>
          </div>
        </div>
    </div>
  );
}
