import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Content from './components/Content';

/**
 * App is wrapped with ThemeProvider.
 * This means EVERY component inside App
 * can access the global theme.
*/

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen p-6 flex flex-col gap-4">
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  )
}

export default App
