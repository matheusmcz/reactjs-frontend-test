import React from "react";
import { HiOutlineUserRemove } from "react-icons/hi";
import { RiUserAddLine } from "react-icons/ri";
import { Container, JoinParticipandMessage, Content } from "./styles";

interface IJoinParticipantContainer {
  handleAllowParticipantJoin: (allowed: boolean) => void;
}

const JoinParticipantContainer: React.FC<IJoinParticipantContainer> = ({
  handleAllowParticipantJoin,
}) => {
  return (
    <Container>
      <JoinParticipandMessage>
        Um novo participante está tentando entrar na reunião.
      </JoinParticipandMessage>
      <Content>
        <RiUserAddLine
          size={30}
          color="#FFBD2D"
          title="Aceitar participante"
          onClick={() => handleAllowParticipantJoin(true)}
        />
      </Content>
      <Content>
        <HiOutlineUserRemove
          size={30}
          color="#FF0049"
          title="Recusar participante"
          onClick={() => handleAllowParticipantJoin(false)}
        />
      </Content>
    </Container>
  );
};

export default JoinParticipantContainer;
