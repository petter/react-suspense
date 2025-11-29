import { Suspense } from "react";
import "./index.css";
import { SuspendedComponent2 } from "./suspended-component2";

export function App() {
  const messagePromise = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("hello, world from suspended component 2!");
    }, 1000);
  });
  return (
    <div>
      <h1>React Suspense</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <SuspendedComponent2 promise={messagePromise} />
      </Suspense>
    </div>
  );
}

export default App;
