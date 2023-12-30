import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Watch from "./components/Watch";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <Watch />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
     
        <div className="App">
          <Header />
          <RouterProvider router={appRouter}>
          <Body />
          </RouterProvider>
        </div>
     
    </Provider>
  );
}

export default App;
