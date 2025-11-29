import { use } from "react";

export function SuspendedComponent2({ promise }: { promise: Promise<string> }) {
  const result = use(promise);
  return <div>{result}</div>;
}
