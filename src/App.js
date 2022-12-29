import Home from "./Components/Home";
import ThemeContextProvider from "./Contexts/ThemeContext";

function App() {
  return (
    <div className="App font-sans">
      <ThemeContextProvider>
        <Home/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;