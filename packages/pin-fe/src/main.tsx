import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AuthContextProvider from './contexts/AuthContext.tsx';
import { ErrorBoundary } from "./components/molecules/ErrorBoundary/ErrorBoundary.tsx";

(async ()=> {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <ErrorBoundary>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ErrorBoundary>);
})()
