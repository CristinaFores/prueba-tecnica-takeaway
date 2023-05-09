import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AllRegions from "../AllRegions/AllRegions";
import "./App.css";
import "../../data/albatross.json";

const App = (): JSX.Element => {
  return (
    <>
      <div className="">
        <Header />
      </div>
      <main className="list bg-gradient-to-t from-slate-300 to-slate-50">
        <AllRegions />
      </main>
      <Footer />
    </>
  );
};

export default App;
