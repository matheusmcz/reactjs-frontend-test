import React from "react";
import Menu from "../Menu";
import Header from "../Header";
import Video from "../Video";
import { Container } from "./styles";
import { IconType } from "react-icons";

interface MenuIcon {
  state: string;
  icon: IconType;
  iconOff: IconType;
  size: number;
  color: string;
  handleClick: string;
  tooltip: string;
}

interface MeetingParticipant {
  id: number;
  name: string;
  image: string;
  isVideoOn: boolean;
}

interface SideBarProps {
  participantWantsJoin: boolean;
  handleAllowParticipantJoin: (allowed: boolean) => void;
  participantWasAllowed: boolean;
  paticipantAllowedMessage: string;
  isMainVideoOn: boolean;
  meetingParticipants: MeetingParticipant[];
  handleMouseEnter: (participantId: number) => void;
  handleMouseLeave: () => void;
  isShowRemoveUser: boolean;
  participantIdHover: number;
  handleParticipantVideoToggle: (participantId: number) => void;
  handleRemoveParticipant: (participantId: number) => void;
  menuIconsList: MenuIcon[];
  checkState: (state: string) => boolean | undefined;
  handleClickMenuIcon: (handleFunction: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({
  participantWantsJoin,
  handleAllowParticipantJoin,
  participantWasAllowed,
  paticipantAllowedMessage,
  isMainVideoOn,
  meetingParticipants,
  handleMouseEnter,
  handleMouseLeave,
  isShowRemoveUser,
  participantIdHover,
  handleParticipantVideoToggle,
  handleRemoveParticipant,
  menuIconsList,
  checkState,
  handleClickMenuIcon,
}) => {
  return (
    <Container>
      <Header
        participantWantsToJoin={participantWantsJoin}
        handleAllowParticipantJoin={handleAllowParticipantJoin}
        participantWasAllowed={participantWasAllowed}
        paticipantMessage={paticipantAllowedMessage}
      />
      <Video
        isMainVideoOn={isMainVideoOn}
        meetingParticipants={meetingParticipants}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        isShowRemoveUser={isShowRemoveUser}
        participantIdHover={participantIdHover}
        handleParticipantVideoToggle={handleParticipantVideoToggle}
        handleRemoveParticipant={handleRemoveParticipant}
      />
      <Menu
        menuIcons={menuIconsList}
        checkState={checkState}
        handleClickMenuIcon={handleClickMenuIcon}
      />
    </Container>
  );
};

export default SideBar;
