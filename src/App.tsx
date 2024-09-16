import "./null.css";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/router";
import { Provider } from "react-redux";
import store from "./store/slices/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;



