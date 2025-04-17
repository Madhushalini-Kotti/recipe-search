import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipeSearch from "./components/RecipeSearch";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <RecipeSearch />
      </main>
      <Footer />
    </div>
  );
}

export default App;