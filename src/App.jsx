import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience,Hero, Navbar, Credits,Tech, Works, StarsCanvas } from "./components";
import Demo from "./components/Demo";


function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary  bg-black'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
       <Demo/>
      
       <StarsCanvas />
        <div className='relative z-0'>
          <Contact />
          <Credits/>
          <Tech />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;