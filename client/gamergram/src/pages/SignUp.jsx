import { Gamepad2 } from "lucide-react";
import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const req = await fetch("http://localhost:3000/users/signup", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          Name: name,
          email: email,
          userName: username,
          password: password,
        }),
      });

      const resp = await req.json();
      console.log("User signed-up successfully", resp);
    } catch (error) {
      throw Error("Error logging-in, please try again.", error.message);
    }
  };

  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-b from-custompurple-100 to-customblue-100 flex justify-center items-center p-5">
        <div
          className="bg-transparent h-[630px] w-[400px] border-2 border-gray-900 
        rounded-2xl flex flex-col lg:mt-[10px] p-8 gap-2 shadow-2xl center-auth-fields sm:flex sm:justify-center sm:items-center md:flex md:justify-center md:items-center lg:flex lg:justify-center lg:items-center"
        >
          <div className="flex flex-col items-center">
            <Gamepad2 size={50} color="#34C759" className="" />
            <h1 className="text-customgreen-200 font-semibold orbitron text-lg mb-2">
              WELCOME GAMER!
            </h1>
            <div className="relative w-full flex justify-center mt-2 mb-4">
              <div className="absolute h-[1px] w-[80%] bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-70" />
              <div className="absolute h-[2px] w-[60%] bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-40" />
            </div>
          </div>

          <form onSubmit={handleSignUp}>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2 p-2">
                <h1 className="text-gray-400 text-md orbitron">Name</h1>
                <input
                  className="border-2 border-gray-900 w-[240px] rounded-md h-[38px] text-gray-500 p-2 text-md"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2 p-2">
                <h1 className="text-gray-400 text-md orbitron">Email</h1>
                <input
                  className="border-2 border-gray-900 w-[240px] rounded-md h-[38px] text-gray-500 p-2 text-md"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2 p-2">
                <h1 className="text-gray-400 text-md orbitron">Username</h1>
                <input
                  className="border-2 border-gray-900 w-[240px] rounded-md h-[38px] text-gray-500 p-2 text-md"
                  placeholder="Create your gamer tag"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  Sign-up
                </button>
                 <p className="text-gray-400">
                 Already have an account?{" "}
                  <a className="text-customgreen-400 cursor-pointer hover:text-customgreen-500">
                    Log in
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
