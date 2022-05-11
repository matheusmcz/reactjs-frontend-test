import React from "react";
import { CgScreen } from "react-icons/cg";
import { FaRegWindowClose } from "react-icons/fa";
import {
  Container,
  TurnParticipantScreenOff,
  RemoveParticipantButton,
} from "./styles";

interface Participant {
  id: number;
  name: string;
  image: string;
  isVideoOn: boolean;
}

interface ParticipantButtonsProps {
  participant: Participant;
  handleParticipantVideoToggle: (participantId: number) => void;
  handleRemoveParticipant: (participantId: number) => void;
}

const ParticipantButtons: React.FC<ParticipantButtonsProps> = ({
  participant,
  handleParticipantVideoToggle,
  handleRemoveParticipant,
}) => {
  return (
    <Container>
      <TurnParticipantScreenOff
        title={participant.isVideoOn ? "Desligar vídeo" : "Ligar vídeo"}
        onClick={() => handleParticipantVideoToggle(participant.id)}
      >
        {participant.isVideoOn ? (
          <FaRegWindowClose color="#FF0049" size={30} />
        ) : (
          <CgScreen color="#FF0049" size={30} />
        )}
      </TurnParticipantScreenOff>
      <RemoveParticipantButton
        title="Remover participante"
        onClick={() => handleRemoveParticipant(participant.id)}
      >
        X
      </RemoveParticipantButton>
    </Container>
  );
};

export default ParticipantButtons;
