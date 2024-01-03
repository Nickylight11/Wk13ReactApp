import "./App.css";
import Navigation from "./Components/Navigation";
import LoginForm from "./Components/LoginForm";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Navigation />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
