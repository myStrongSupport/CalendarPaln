import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SalavatPage, { loader as loadZekerDays } from "./pages/SalavatPage";
import CalendarPage from "./pages/CalendarPage";
import Root from "./pages/Root";
import InfoPage from "./pages/InfoPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      children: [
        {
          index: true,
          element: <SalavatPage />,
          loader: loadZekerDays,
        },
        {
          path: "calendar",
          element: <CalendarPage />,
        },
        { path: "info", element: <InfoPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
