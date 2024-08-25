import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardForm from "../components/CardForm";
import useCards from "../hooks/useCards";
import useForm from "../../forms/hooks/useForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import cardSchema from "../models/cardSchema";
import mapCardToModel from "../helpers/normalization/mapToModel";

export default function EditCardPage() {
  const { id } = useParams();
  const { handleUpdateCard, getCardById, card } = useCards();
  const {
    data,
    errors,
    setData,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
  } = useForm(initialCardForm, cardSchema, (data) =>
    handleUpdateCard(card._id, data)
  );

  useEffect(() => {
    getCardById(id);
  }, []);

  useEffect(() => {
    if (card) {
      setData(mapCardToModel(card));
    }
  }, [card]);

  return (
    <div>
      <Container
        sx={{
          paddingTop: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardForm
          title="edit card"
          onSubmit={onSubmit}
          onReset={handleReset}
          errors={errors}
          validateForm={validateForm}
          onInputChange={handleChange}
          data={data}
        />
      </Container>
    </div>
  );
}
