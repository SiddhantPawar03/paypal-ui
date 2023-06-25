import "./styles.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Search from "./Components/Search";
import Button from "./Components/Button";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="app">
      <Search />
      <div className="filter">
        <h5>Filter by:</h5>
      </div>
      <div className="buttons">
      <Button filter="Date: Last 90 Days"/>
      <Button filter="Type"/>
      <Button filter="Status"/>
      </div>
      <div className="cardTitle">
        <h5>Completed</h5>
        <p>This week</p>
      </div>
      <div className="container-flex" class="d-grid gap-5">
      <Card title="Name.com Inc" date="Jun 22" mode="Automatic Payment" payment="9.89"/>
      <Card title="Name.com Inc" date="Jun 21" mode="Automatic Payment" payment="8.99"/>
      <Card title="Name.com Inc" date="Jun 20" mode="Automatic Payment" payment="9.99"/>
      </div>
      </div>
    </>
  );
}
