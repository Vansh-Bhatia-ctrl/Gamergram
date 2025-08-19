import CharacterCards from "../components/CharacterCards";
import Header from "../components/Header";
import SagaSubHeader from "../components/SagaSubHeader";

const SagaPage = () => {
  return (
    <>
      <div>
        <div className="bg-neutral-900 min-h-screen w-screen overflow-x-hidden">
          {/*Header Section */}
          <div>
            <Header />
          </div>

          {/*Sub-header*/}
          <SagaSubHeader />

          {/*Character cards*/}
          <CharacterCards />
        </div>
      </div>
    </>
  );
};

export default SagaPage;
