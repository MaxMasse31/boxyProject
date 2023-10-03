import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LeftContainer from "./Layouts/LeftContainer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-wrap justify center items-center flex-grow bg-gray-100 px-10 md:flex-nowrap ">
        <LeftContainer /> 
        {/* <Visualisation />  */}
      </main>

      <Footer/>
    </div>
  );
}

export default App;
