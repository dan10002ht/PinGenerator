import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AuthContextProvider from './contexts/AuthContext.tsx';

(async ()=> {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>);
})()
