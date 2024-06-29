import { FallbackProps } from "react-error-boundary";

function FallBackErrorBoundary({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div>
      <h1>{error.message}</h1>
      <button onClick={resetErrorBoundary}>click here</button>
    </div>
  );
}

export default FallBackErrorBoundary;
