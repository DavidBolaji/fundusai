import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Error from './pages/Error';
import worksData from './components/worksData';
import SharedLayout from './pages/SharedLayout';

function App() {
  const worksElements = worksData.map(item => {
    return ( 
    <Services
        key={item.id}
        {...item}
    />
    )
  })
  return (
      <BrowserRouter>
      <Routes>
          <Route path='/' element= {<SharedLayout/>}>
          <Route index element= {<Home />}/>
          <Route path='services' element= {worksElements}/>
          <Route path='about' element= {<About />}/>
          <Route path='contact' element= {<Contact />}/>
          <Route path='*' element= {<Error />}/>
          </Route>   
      </Routes>
      </BrowserRouter>
    
    
  );
}

export default App;