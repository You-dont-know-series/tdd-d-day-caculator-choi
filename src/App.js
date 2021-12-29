import "./App.css";
import { useState } from "react";
import { calculateDiffDate } from "./calculate";

function App() {
  const [diffDate, setDiffDate] = useState();
  const [date, setDate] = useState("");

  console.log(diffDate);

  return (
    <div className="App">
      <input
        data-testid="date-input"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button
        data-testid="calculate-btn"
        onClick={() => {
          setDiffDate(calculateDiffDate(new Date(), new Date(date)));
        }}
      >
        계산
      </button>

      {diffDate && <span data-testid="d-day">{diffDate}일 남음</span>}
    </div>
  );
}

export default App;
