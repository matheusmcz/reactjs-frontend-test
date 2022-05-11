import React from "react";
import { Container, Title, TitleContainer } from "./styles";
import Join from "../Join";
import AllowMessage from "../AllowMessage";

interface HeaderProps {
  participantWantsToJoin: boolean;
  handleAllowParticipantJoin: (allowed: boolean) => void;
  participantWasAllowed: boolean;
  paticipantMessage: string;
}

const Header: React.FC<HeaderProps> = ({
  participantWantsToJoin,
  handleAllowParticipantJoin,
  participantWasAllowed,
  paticipantMessage,
}) => {
  return (
    <Container>
      <TitleContainer>
        <Title>
          <span>Reunião Planejamento</span>
        </Title>
        {participantWantsToJoin && (
          <Join handleAllowParticipantJoin={handleAllowParticipantJoin} />
        )}
        {paticipantMessage !== "" && (
          <AllowMessage
            participantWasAllowed={participantWasAllowed}
            paticipantMessage={paticipantMessage}
          />
        )}
      </TitleContainer>
    </Container>
  );
};

export default Header;
