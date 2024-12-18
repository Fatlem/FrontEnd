import { RouterProvider } from "react-router-dom";
import RouteList from "./routes/RouteList";

function App() {

  return (
     <RouterProvider router={RouteList} />
  )
}

export default App
