import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardHeaderComponent from "./CardHeaderComponent";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

export default function CardComponent({
  card,
  handleDelete,
  handleEdit,
  handleLike,
}) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 250,
        m: 2,
        transition: "transform 0.3s ease-in-out", // Smooth transition for hover
        "&:hover": {
          transform: "scale(0.95)", // Shrink the card on hover
        },
      }}
    >
      <CardActionArea
        onClick={() => navigate(ROUTES.CARD_INFO + "/" + card._id)}
      >
        <CardHeaderComponent
          image={card?.image?.url || "default-image-url.jpg"}
          alt={card?.image?.alt || "Default Alt Text"}
          title={card?.title || "No Title"}
          subtitle={card?.subtitle || "No Subtitle"}
        />
        <CardBody
          phone={card?.phone || "No Phone"}
          address={card?.address || "No Address"}
          bizNumber={card?.bizNumber || "No Business Number"}
        />
      </CardActionArea>
      <CardActionBar
        cardId={card?._id}
        cardUserId={card?.user_id}
        likes={card?.likes || []}
        handleDelete={handleDelete}
        handleLike={handleLike}
        handleEdit={handleEdit}
      />
    </Card>
  );
}
