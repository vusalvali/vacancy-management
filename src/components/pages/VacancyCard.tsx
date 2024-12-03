// VacancyCard.js
import {
  Card,
  CardHeader,
  CardFooter,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface VacancyCardProps {
  title: string;
  description: string;
  location: string;
}

const VacancyCard: FC<VacancyCardProps> = ({
  title,
  description,
  location,
}) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardFooter>
      <Button>
        <Link to="/">Apply - {location}</Link>
      </Button>
    </CardFooter>
  </Card>
);

export default VacancyCard;
