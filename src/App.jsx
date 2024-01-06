import { Provider } from "react-redux"
import Pages from "./Pages/Pages/Pages"
import Nabvar from "./components/Navbar/Nabvar"
import store from "./redux/store/store"

function App() {

  return (
    <>
      <Provider store={store}>
        <Nabvar></Nabvar>
        <Pages></Pages>
      </Provider>
    </>
  )
}

export default App
