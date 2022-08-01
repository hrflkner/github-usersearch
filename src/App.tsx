// Packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Pages
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import NotFound from './pages/NotFound';

// Components
import NavBar from './components/header/NavBar';
import Footer from './components/footer/Footer';

//Context
import { GithubContextProvider } from './context/github/GithubContext';

function App() {
    return (
        <GithubContextProvider>
            <Router>
                <div className="App">
                    <div className="flex flex-col justify-between h-screen">
                        <NavBar />
                        <main className="container mx-auto px-3 pb-12">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route
                                    path="/users/:login"
                                    element={<Profile />}
                                />
                                <Route path="/about" element={<About />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </main>
                        <Footer />
                        <Toaster
                            containerStyle={{
                                top: 100,
                            }}
                        />
                    </div>
                </div>
            </Router>
        </GithubContextProvider>
    );
}

export default App;
