import { Heart, MessageSquare, Gamepad2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

let images = [
  { src: "/kratos.png" },
  { src: "/altair.png" },
  { src: "/nathandrake.png" },
  { src: "/wukong.png" },
  { src: "/jinsakai.png" },
];

const HomePage = () => {
  const [iconSize, setIconSize] = useState(22);
  useEffect(() => {
    const adjustIconSize = () => {
      if (window.innerWidth >= 640) {
        setIconSize(30);
      } else {
        setIconSize(22);
      }
    };

    adjustIconSize();

    window.addEventListener("resize", adjustIconSize);

    return () => window.removeEventListener("resize", adjustIconSize);
  }, []);
  return (
    <>
      <div className="h-auto w-screen bg-gradient-to-b from-custompurple-100 to-customblue-100 flex flex-col justify-between">
        <div className="flex justify-between items-center p-5">
          <div className="flex gap-2 items-center cursor-pointer">
            <Gamepad2 size={35} color="#00f5c0" className="" />
            <h1 className="text-customgreen-100 orbitron text-xl font-semibold sm:text-2xl">
              Gamergram
            </h1>
          </div>

          <div className="flex gap-4 items-center">
            <button className="bg-customgray-200 text-white text-sm orbitron p-2 h-auto w-auto rounded-lg hover:bg-customgreen-100 hover:text-custompurple-100 transition cursor-pointer sm:text-md">
              Sign up
            </button>
          </div>
        </div>

        <div className="flex-1">
          {/*Typing animation and brief about the app*/}
          <div className="p-7 flex flex-col gap-4 min-h-[120px] overflow-hidden">
            <div className="h-[180px] sm:h-[140px] custom-box custom-box-2 custom-box-3 custom-box-4 custom-box-5">
              <h1 className="text-white text-5xl font-extrabold orbitron leading-tight h-[60px] sm:text-6xl">
                <Typewriter
                  words={[
                    "Connect with gamers.",
                    "Create discussion rooms.",
                    "Chat with iconic characters.",
                    "Go live with other gamers.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle=""
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={2000}
                />
              </h1>
            </div>
            <p className="text-gray-400 text-md sm:text-lg">
              Join the community and chat with fellow gamers
            </p>
          </div>

          <div className="p-7 -mt-[35px]">
            <button className="bg-customgreen-200 text-black font-semibold p-2 w-[130px] rounded-lg cursor-pointer hover:bg-customgreen-300">
              Get Started
            </button>
          </div>

          {/*Stories for showcase purpose*/}
          <div className="p-7">
            {images.map((image, index) => (
              <div key={index} className="-mt-[10px] inline-block ml-2">
                <img
                  src={image.src}
                  className="border-2 border-customgreen-100 rounded-full w-[50px] h-[50px] object-contain sm:w-[60px] sm:h-[60px]"
                />
              </div>
            ))}
          </div>

          <div className="p-x-5 flex gap-2 overflow-hidden">
            {/*Discussion room section*/}
            <div className="p-3 bg-transparent border-[1px] border-gray-900 shadow-2xl w-[250px] h-auto rounded-xl ml-3 sm:w-[480px]">
              <div className="flex gap-1">
                <div>
                  <img
                    src="gamer.png"
                    className="rounded-full h-[40px] w-[40px] object-cover sm:h-[47px] sm:w-[47px]"
                  />
                </div>
                <div>
                  <p className="text-white text-[13px] orbitron sm:text-[15px]">
                    Alex
                  </p>
                  <p className="text-gray-500 text-[12px] orbitron sm:text-[15px]">
                    2h
                  </p>
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <p className="text-white orbitron font-semibold text-[15px] sm:text-[17px]">
                    What do you think of the new level in Elden Ring?
                  </p>
                </div>
                <div>
                  <div className="w-full mt-2">
                    <img
                      src="elden_ring.png"
                      className="h-full max-h-[200px] w-[300px] object-cover rounded-xl sm:w-[460px] sm:min-h-[450px]"
                    />
                  </div>
                  <div className="flex gap-7 mt-2">
                    <div className="flex items-center gap-1">
                      <Heart size={iconSize} color="#00f5c0" />
                      <p className="text-white orbitron text-[12px] sm:text-[14px]">
                        120
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare size={iconSize} color="#00f5c0" />
                      <p className="text-white orbitron text-[12px] sm:text-[14px]">
                        20
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Streamer section*/}
            <div className="h-[340px] w-auto rounded-xl border-[1px] border-gray-900 shadow-xl mr-2">
              <div className="px-2 py-2">
                <h1 className="text-white font-bold bg-red-600 h-[30px] w-[45px] px-1 py-1 rounded-lg">
                  LIVE
                </h1>
              </div>
              <div className="p-2">
                <img
                  src="streamer.png"
                  className="w-[170px] h-full rounded-xl"
                />
              </div>
              <div className="flex items-center gap-1">
                <div>
                  <img
                    src="/streamer_profile_pic.png"
                    className="rounded-full w-[35px] h-[35px] object-contain ml-2 bg-black border-[1px] border-gray-900"
                  />
                </div>
                <div>
                  <p className="text-white text-[13px] orbitron mt-2">Sarah</p>
                </div>
              </div>
            </div>
          </div>

          {/*Gaming charecter chat showcase section*/}
          <div className="p-2">
            <div className="h-auto w-auto rounded-xl border-[1px] border-gray-900 shadow-xl mt-2">
              <div>
                <p className="text-white font-bold orbitron p-2">
                  Charecter Chats
                </p>
              </div>
              <div className="p-2 flex">
                <div className="w-[200px]">
                  <div>
                    <img
                      src="/kratos.png"
                      className="h-[150px] p-2 rounded-2xl"
                    />
                  </div>
                  <div>
                    <p className="text-white orbitron font-semibold ml-3 text-[12px]">
                      We begin. Prepare yourself.
                    </p>
                  </div>
                </div>
                <div className="w-[200px]">
                  <div>
                    <img
                      src="/altair.png"
                      className="h-[150px] p-2 rounded-2xl"
                    />
                  </div>
                  <div>
                    <p className="text-white orbitron font-semibold ml-3 text-[12px]">
                      We move in shadows... and act in silence.
                    </p>
                  </div>
                </div>
                <div className="w-[200px]">
                  <div>
                    <img
                      src="/nathandrake.png"
                      className="h-[150px] p-2 rounded-2xl"
                    />
                  </div>
                  <div>
                    <p className="text-white orbitron font-semibold ml-3 text-[12px]">
                      Hey there. You ready for an adventure?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
