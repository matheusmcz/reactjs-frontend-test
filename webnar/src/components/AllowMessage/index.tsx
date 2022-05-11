import React from "react";
import { Container } from "./styles";

interface AllowMessageProps {
  participantWasAllowed: boolean;
  paticipantMessage: string;
}

const ParticipantAllowedMessageContainer: React.FC<AllowMessageProps> = ({
  participantWasAllowed,
  paticipantMessage,
}) => {
  return (
    <Container color={participantWasAllowed ? "#FFBD2D" : "#FF0049"}>
      <span>{paticipantMessage}</span>
    </Container>
  );
};

export default ParticipantAllowedMessageContainer;
