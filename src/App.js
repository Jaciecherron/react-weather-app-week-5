import './App.css';
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity= "New York" />
        <footer>
          This project was codded by{" "}
          <a
            href="https://github.com/Jaciecherron"
            target="_blank"
            rel="noreferrer"
          >
            Jacie Spivey{" "}
          </a>{" "}
          and is hosted on{" "}
          <a
            href="https://dainty-granita-d17123.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}


