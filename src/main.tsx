import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import '@mantine/notifications/styles.css';

import { createTheme, MantineProvider } from "@mantine/core";

import { ErrorBoundary } from "react-error-boundary";
import FallBackErrorBoundary from "./components/ui/FallBackErrorBoundary.tsx";

import { Provider } from "react-redux";
import { store } from "./services/redux/store.ts";

const theme = createTheme({
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
    xxl: "118em",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="light" theme={theme}>
      <ErrorBoundary
        FallbackComponent={FallBackErrorBoundary}
        onReset={() => window.location.replace("/")}
      >
        <Provider store={store}>
          <App />
        </Provider>
      </ErrorBoundary>
    </MantineProvider>
  </React.StrictMode>,
);
