import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-wrap justify center items-center flex-grow bg-gray-100 px-10 md:flex-nowrap ">
        {/* <Leftside />  */}
        {/* <Visualisation />  */}
      </main>

      <Footer/>
    </div>
  );
}

export default App;
