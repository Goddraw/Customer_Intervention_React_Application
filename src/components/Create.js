import { useState } from "react";

const Create = () => {
  const [author, setAuthor] = useState("{data.customer.id}");
  const [customer, setCustomer] = useState("{data.customer.id}");
  const [buildingID, setBuildingID] = useState("");
  const [batteryID, setBatteryID] = useState("");
  const [columnID, setColumnID] = useState("");
  const [elevatorID, setElevatorID] = useState("");
  const [employeeID, setEmployeeID] = useState("");
  const [result, setResult] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const intervention = {
      author,
      customer,
      buildingID,
      batteryID,
      columnID,
      elevatorID,
      employeeID,
      result,
      description,
      status,
    };

    fetch("http://localhost:8000/interventions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify,
    }).then(() => {
      console.log("new blog added");
    });
  };

  return (
    <div className="create">
      <h2>
        Add a new intervention
        <form onSubmit={handleSubmit}>
          <label>Intervention Author:</label>
          <input
            type="text"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <label>CustomerID:</label>
          <input
            type="text"
            required
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />
          <label>BuildingID</label>
          <input
            type="text"
            required
            value={buildingID}
            onChange={(e) => setBuildingID(e.target.value)}
          />
          <label>BatteryID</label>
          <input
            type="text"
            required
            value={batteryID}
            onChange={(e) => setBatteryID(e.target.value)}
          />
          <label>ColumnID:</label>
          <input
            type="text"
            required
            value={columnID}
            onChange={(e) => setColumnID(e.target.value)}
          />
          <label>ElevatorID</label>
          <input
            type="text"
            required
            value={elevatorID}
            onChange={(e) => setElevatorID(e.target.value)}
          />
          <label>EmployeeID</label>
          <input
            type="text"
            required
            value={employeeID}
            onChange={(e) => setEmployeeID(e.target.value)}
          />
          <label>Result</label>
          <input
            type="text"
            required
            value={result}
            onChange={(e) => setResult(e.target.value)}
          />
          <label>Description</label>
          <input
            type="textarea"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>Status</label>
          <input
            type="text"
            required
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />

          <button>Add Intervention</button>
        </form>
      </h2>
    </div>
  );
};

export default Create;
