import BlockHeroHome from "../components/blocs/BlockHeroHome";
import Header from "../components/Header";

const HomePage = () => {
    return (
      <>
        <Header />
        <main className="home-page">
          <BlockHeroHome />
        </main>
      </>
    );
  };
  
  export default HomePage;
  