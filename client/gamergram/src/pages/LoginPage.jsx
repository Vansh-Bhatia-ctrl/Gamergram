import { Gamepad2 } from "lucide-react";

export default function LoginPage() {
  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-b from-custompurple-100 to-customblue-100 flex justify-center items-start p-5">
        <div
          className="bg-transparent h-[400px] w-[400px] border-2 border-gray-900 
        rounded-lg mt-[60px] flex flex-col p-8 gap-2"
        >
          <div className="flex flex-col items-center gap-2">
            <Gamepad2 size={50} color="#34C759" className="" />
            <h1 className="text-customgreen-200 font-semibold orbitron text-lg">
              WELCOME BACK, GAMER
            </h1>
          </div>
          <div className="border-b-2 border-gray-900 h-[50px] w-[250px] flex items-center justify-center">
            <div className="flex justify-center items-center gap-16">
              <p className="text-customgreen-300 font-semibold orbitron text-lg">
                Login
              </p>
              <p className="text-customgreen-300 font-semibold orbitron text-lg">
                Sign Up
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
