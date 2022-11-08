import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router/Router";

function App() {
  return (
    <div className='max-w-7xl mx-auto overflow-x-hidden'>
      <RouterProvider router={router} />
    </div>
  )

}

export default App;
