import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VacanciesPage from "./components/Vacancies.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <VacanciesPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
  // (
  //   <div className="App">
  //     <h1 className="text-2xl font-bold p-4">Job Openings</h1>
  //     <VacanciesPage />
  //   </div>
  // );
}

export default App;
