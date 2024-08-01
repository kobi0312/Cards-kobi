import React from "react";
import PageHeader from "../../components/PageHeader";
import Cards from "../components/Cards";

export default function CardsPage() {
  return (
    <div>
      <PageHeader
        title="Cards"
        subtitle="On this page you can find all bussines cards from all categories"
      />
      <Cards />
    </div>
  );
}
