import Header from "./assets/Components/Header";
import Footer from "./assets/Components/Footer";

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
