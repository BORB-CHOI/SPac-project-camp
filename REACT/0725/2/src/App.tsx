import Page from "./components/learn/Page";
import { CounterContextProvider } from "./context/countContext";

const App = () => {
  return (
    <>
      <CounterContextProvider>
        <Page />
      </CounterContextProvider>
    </>
  );
};
export default App;
