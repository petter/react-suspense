import { Suspense } from "react";
import "./index.css";
import { SuspendedComponent } from "./suspended-component";

export function App() {
  return (
    <div>
      <h1>React Suspense</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <SuspendedComponent />
      </Suspense>
    </div>
  );
}

export default App;
