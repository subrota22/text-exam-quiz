import React from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "./Components/routers/routers";


function App() {
  return (
  <React.Fragment>


<RouterProvider router={routers}>
  
</RouterProvider>
  </React.Fragment>
  );
}

export default App;
