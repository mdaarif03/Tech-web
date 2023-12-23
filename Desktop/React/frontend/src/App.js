import About from './About/About';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import {BrowserRouter, Route,Routes} from 'react-router-dom'

const App = () => (
  <>
    {/* <Header /> */}
    <main style={{ minHeight: "90vh" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Header} exact />
          <Route path="/about" Component={About} />
        </Routes>
      </BrowserRouter>
    </main>
    <Footer />
  </>
);

export default App;
