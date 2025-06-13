import { Gamepad2 } from "lucide-react";

let images = [
  { src: "/kratos.png" },
  { src: "/altair.png" },
  { src: "/nathandrake.png" },
  { src: "/wukong.png" },
  { src: "/jinsakai.png" },
];

const HomePage = () => {
  return (
    <div>
      <div className="h-screen w-screen bg-gradient-to-b from-custompurple-100 to-customblue-100 flex flex-col justify-between">
        <div className="flex justify-between items-center p-5">
          <div className="flex gap-2 items-center cursor-pointer">
            <Gamepad2 size={32} color="#00f5c0" className="" />
            <h1 className="text-customgreen-100 orbitron text-xl font-semibold">
              Gamergram
            </h1>
          </div>

          <div className="flex gap-4 items-center">
            <button className="bg-transparent border border-customgreen-100 text-white text-sm orbitron p-2 h-auto w-auto rounded-lg hover:bg-customgreen-100 hover:text-custompurple-100 transition cursor-pointer">
              Sign up
            </button>
          </div>
        </div>

        <div className="flex-1">
          <div className="p-7 flex flex-col gap-4">
            <h1 className="text-white text-5xl font-semibold obritron">
              Connect with Gamers
            </h1>
            <p className="text-gray-400 text-md">
              Join the community and chat with fellow gamers
            </p>
          </div>
          <div className="p-7 -mt-[35px]">
            <button className="bg-customgreen-200 text-black font-semibold p-2 w-[130px] rounded-lg cursor-pointer hover:bg-customgreen-300">
              Get Started
            </button>
          </div>

          <div className="p-7">
            {images.map((image, index) => (
              <div key={index} className="-mt-[10px] inline-block ml-2">
                <img
                  src={image.src}
                  className="border-2 border-customgreen-100 rounded-full w-[50px] h-[50px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
