import Header from "../components/Header";
import AiFilters from "../components/AiFilters";
import AiCard from "../components/AiCard";

const AiChatBox = () => {
  return (
    <>
      <div className="min-h-screen min-w-screen bg-neutral-900 overflow-x-hidden">
        {/*Header section*/}
        <div className="border-b-1 border-neutral-700">
          <Header />
        </div>

        {/*AI characters header*/}
        <div className="flex flex-col items-center justify-center gap-3 mt-2">
          <div className="text-center">
            <h1 className="bg-gradient-to-l from-blue-300 to-blue-900 bg-clip-text text-transparent font-extrabold text-4xl tracking-wide leading-tight">
              CHAT WITH LEGENDARY CHARACTERS
            </h1>
          </div>

          <div className="text-neutral-400">
            Choose a gaming legend to chat with
          </div>
        </div>

        {/*Filters section*/}
        <AiFilters />

        {/*Character cards*/}
        <AiCard />
      </div>
    </>
  );
};

export default AiChatBox;
