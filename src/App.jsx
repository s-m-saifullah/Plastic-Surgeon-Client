import { RouterProvider } from "react-router-dom";
import router from "./routers/routes";

function App() {
  return (
    <div className="mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
