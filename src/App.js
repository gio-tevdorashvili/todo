import Main from './components/main/Main';
import GlobalContextProvider from './store/GlobalContext';

function App() {
  return (
    <GlobalContextProvider>
      <Main />
    </GlobalContextProvider>
  );
}

export default App;
