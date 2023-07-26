import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ZekerPage, { loader as loadZekerDays } from "./pages/ZekerPage";
import CalendarPage from "./pages/CalendarPage";
import Root from "./pages/Root";
import InfoPage from "./pages/InfoPage";
import RealCalendar from "./components/Calendar/CalendarParts/RealCalendar";
import CalendarNewPage from "./pages/Calendar/CalendarNewPage";
import CalendarEditPage from "./pages/Calendar/CalendarEditPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      children: [
        { index: true, element: <Navigate to="/calendar" replace /> },
        {
          path: "/calendar",
          element: <CalendarPage />,
          children: [
            { index: true, element: <RealCalendar /> },
            {
              path: "/calendar/:date",
              element: <CalendarNewPage />,
              action: () => {
                console.log("red");
              },
            },
            {
              path: "/calendar/:date/edit/:id",
              element: <CalendarEditPage />,
            },
          ],
        },
        {
          path: "zeker",
          element: <ZekerPage />,
          loader: loadZekerDays,
        },

        { path: "info", element: <InfoPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
