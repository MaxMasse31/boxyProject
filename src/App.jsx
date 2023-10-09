import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LeftContainer from "./Layouts/LeftContainer";
import Visualization from "./Layouts/Visualization/Visualization";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-wrap justify-center items-center flex-grow bg-gray-100 px-10 md:flex-nowrap ">
        <LeftContainer />
        <Visualization />
      </main>

      <Footer />
    </div>
  );
}

export default App;
