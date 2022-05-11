import React from "react";
import { Container, ParticipanteName, ParticipantVideo } from "./styles";

interface Participant {
  id: number;
  name: string;
  image: string;
  isVideoOn: boolean;
}

interface ParticipantsDataProps {
  participant: Participant;
}

const ParticipantsData: React.FC<ParticipantsDataProps> = ({ participant }) => {
  return (
    <Container>
      <ParticipantVideo
        src={participant.isVideoOn ? participant.image : ""}
        muted
        autoPlay
        loop
      />
      <ParticipanteName>{participant.name}</ParticipanteName>
    </Container>
  );
};

export default ParticipantsData;
