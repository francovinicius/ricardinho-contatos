
import Footer from "./Components/Footer";
import Links from "./Components/Links";
import Name from "./Components/Name";

function App() {
  return (
    <div>
    <div className="App d-flex justify-content-center align-itens-center">

      <div className="div-links">
        <Name />
        <Links />
      </div>

      <div className="img-desktop">
        <img className="img-fluid" src="./assets/Background/Ricardinho-img.svg" alt="" />
      </div>
</div>
      <Footer />



    </div>
  );
}

export default App;
