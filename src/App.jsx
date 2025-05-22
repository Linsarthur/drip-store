import LoginProvider from "./context/LoginContext";
import Paths from "./routes/Paths";
function App() {
  return (
    <>
      <LoginProvider>
        <Paths />
      </LoginProvider>
    </>
  );
}

export default App;
