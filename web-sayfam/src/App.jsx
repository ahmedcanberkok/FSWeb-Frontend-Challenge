import "./App.css";
import Header from "./components/Header";
import LanguageSection from "./components/LanguageSection";
import ProfileSection from "./components/ProfileSection";
import ProjectSection from "./components/ProjectSection";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header />
      <LanguageSection />
      <ScrollToTop />
      <ProfileSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;