import { RouterProvider } from "react-router-dom";
import router from "./routers/routes";

function App() {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
