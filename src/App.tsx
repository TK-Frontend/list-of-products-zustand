import "./App.scss";
import SearchInput from "./components/SearchInput";
import DataTable from "./components/DataTable";

const App = () => {
  return (
    <div className="App">
      <SearchInput />
      <DataTable />
    </div>
  );
};

export default App;
