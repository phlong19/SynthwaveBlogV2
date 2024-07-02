import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";

import { ErrorBoundary } from "react-error-boundary";
import FallBackErrorBoundary from "./components/ui/FallBackErrorBoundary.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <ErrorBoundary
        FallbackComponent={FallBackErrorBoundary}
        onReset={() => window.location.replace("/")}
      >
        <App />
      </ErrorBoundary>
    </MantineProvider>
  </React.StrictMode>,
);
