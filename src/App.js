import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router/Router";

function App() {
  return <RouterProvider router={router}/>
}

export default App;
