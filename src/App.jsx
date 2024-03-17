import TitleSection from "./Components/TitleSection"
import GenerationSection from "./Components/GenerationSection"
import InformationSection from "./Components/InformationSection"
import "./Components/Style/app.css"

function App() {

  return (
    <div>
      <TitleSection />
      <div className="home-section">
        <InformationSection />
        <GenerationSection />
      </div>
    </div>
  );
}

export default App
