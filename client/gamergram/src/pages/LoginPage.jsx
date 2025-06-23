import { Gamepad2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const naviagte = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const req = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const resp = await req.json();
      console.log("Logged-in successfully", resp);
      if(resp.token){
        localStorage.setItem("token", resp.token);
        naviagte("/feed");
      }else{
        console.log("Log-in failed. Please try again.")
      }
    } catch (error) {
      throw Error("Error logging-in, please try again.", error.message);
    }
  };

  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-b from-custompurple-100 to-customblue-100 flex justify-center p-5">
        <div
          className="bg-transparent h-[480px] w-[400px] border-2 border-gray-900 
        rounded-2xl mt-[60px] flex flex-col p-8 gap-2 shadow-2xl center-auth-fields sm:flex sm:justify-center sm:items-center md:flex md:justify-center md:items-center lg:flex lg:justify-center lg:items-center"
        >
          <div className="flex flex-col items-center">
            <Gamepad2 size={50} color="#34C759" className="" />
            <h1 className="text-customgreen-200 font-semibold orbitron text-lg mb-2">
              WELCOME BACK, GAMER
            </h1>
            <div className="relative w-full flex justify-center mt-2 mb-4">
              <div className="absolute h-[1px] w-[80%] bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-70" />
              <div className="absolute h-[2px] w-[60%] bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-40" />
            </div>
          </div>

          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 p-2">
                <h1 className="text-gray-400 text-md orbitron">Username</h1>
                <input
                  className="border-2 border-gray-900 w-[240px] rounded-md h-[38px] text-gray-500 p-2 text-md"
                  placeholder="Enter your gamer tag"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2 p-2">
                <h1 className="text-gray-400 text-md orbitron">Password</h1>
                <input
                  className="border-2 border-gray-900 w-[240px] rounded-md h-[38px] text-gray-500 p-2 text-md"
                  placeholder="***********"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-3">
              <div className="flex flex-col gap-4 p-2 items-center">
                <button className="bg-customgreen-200 hover:bg-customgreen-300 text-customblue-100 orbitron font-semibold w-[240px] h-[38px] rounded-md cursor-pointer">
                  Login
                </button>
                <p className="text-gray-400">
                  Don't have an account?{" "}
                  <a className="text-customgreen-400 cursor-pointer hover:text-customgreen-500">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
