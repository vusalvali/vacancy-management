// VacanciesPage.js
import { useEffect, useState } from "react";
import axios from "axios";
import VacancyCard from "./pages/VacancyCard";

interface Vacancy {
  id: number;
  title: string;
  body: string;
}

const VacanciesPage = () => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setVacancies(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching vacancies:", error);
      }
    };
    fetchVacancies();
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {vacancies.map((vacancy) => (
        <VacancyCard
          key={vacancy.id}
          title={vacancy.title}
          description={vacancy.body}
          location="Remote"
        />
      ))}
    </div>
  );
};

export default VacanciesPage;
