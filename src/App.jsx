import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div>
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>
      <main>
        <section>
          <Home />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Contact />
          <SocialLinks />
        </section>
      </main>
    </div>
  );
}

export default App;
