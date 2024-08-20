import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainLayout from "./layout/main-layout/mainLayout.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootContextProvider from "./context/RootContext.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootContextProvider>
      <MainLayout>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </MainLayout>
    </RootContextProvider>
  </React.StrictMode>
);
