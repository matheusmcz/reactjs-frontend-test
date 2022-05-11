import React from "react";
import ParticipantButtons from "../ParticipatButtons";
import ParticipantsData from "../ParticipantData";
import { BgVideo, Container, Cam, Box, Content } from "./styles";

interface MeetingParticipant {
  id: number;
  name: string;
  image: string;
  isVideoOn: boolean;
}

interface VideoProps {
  isMainVideoOn: boolean;
  meetingParticipants: MeetingParticipant[];
  handleMouseEnter: (participantId: number) => void;
  handleMouseLeave: () => void;
  isShowRemoveUser: boolean;
  participantIdHover: number;
  handleParticipantVideoToggle: (participantId: number) => void;
  handleRemoveParticipant: (participantId: number) => void;
}

const Video: React.FC<VideoProps> = ({
  isMainVideoOn,
  meetingParticipants,
  handleMouseEnter,
  handleMouseLeave,
  isShowRemoveUser,
  participantIdHover,
  handleParticipantVideoToggle,
  handleRemoveParticipant,
}) => {
  return (
    <Container>
      <BgVideo>
        <Cam src={isMainVideoOn ? "video01.mp4" : ""} muted autoPlay loop />
      </BgVideo>
      <Content>
        {meetingParticipants.map((participant) => {
          return (
            <Box
              key={`${participant.name} - ${participant.id}`}
              onMouseEnter={() => handleMouseEnter(participant.id)}
              onMouseLeave={handleMouseLeave}
            >
              {isShowRemoveUser && participant.id === participantIdHover && (
                <ParticipantButtons
                  participant={participant}
                  handleParticipantVideoToggle={handleParticipantVideoToggle}
                  handleRemoveParticipant={handleRemoveParticipant}
                />
              )}
              <ParticipantsData participant={participant} />
            </Box>
          );
        })}
      </Content>
    </Container>
  );
};

export default Video;
