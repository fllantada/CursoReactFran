import { getTasks } from "./services/crud";

function DataContainer() {
  getTasks();
  return (
    <div>
      <h1>Este es el DataContainer</h1>
    </div>
  );
}

export default DataContainer;
