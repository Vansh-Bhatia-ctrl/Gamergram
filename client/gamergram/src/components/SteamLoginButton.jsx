import steamIcon from "/steam-icon.png";

const SteamLoginButton = () => (
  <button className="flex items-center gap-3 bg-gradient-to-r from-[#171A21] via-[#2A2F36] to-[#1B2838] hover:brightness-110 text-white px-4 py-1 w-[240px] rounded-md shadow-md cursor-pointer transition-all duration-200">
    <img src={steamIcon} alt="Steam" className="w-10 h-10 ml-3" />
    <span className="text-center text-white orbitron font-semibold">
      Steam Sign-in
    </span>
  </button>
);

export default SteamLoginButton;
