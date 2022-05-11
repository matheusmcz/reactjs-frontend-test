import React, { useState } from "react";
import Cookies from "universal-cookie";
import { WebinarContainer } from "./styles";
import { menuIcons, participants } from "./userData";
import SideBar from "../../components/SideBar";

interface MeetingParticipant {
  id: number;
  name: string;
  image: string;
  isVideoOn: boolean;
}

const Webnar: React.FC = () => {
  const getInitialParticipants = () => {
    const participantsFromCurrentMeeting = localStorage.getItem("participants");
    if (participantsFromCurrentMeeting !== null) {
      const currentParticipantIds = JSON.parse(
        participantsFromCurrentMeeting
      ).ids;
      const initialParticipants = participants.filter((participant) =>
        currentParticipantIds.includes(participant.id)
      );
      return initialParticipants;
    }
    return [];
  };

  const [meetingParticipants, setMeetingParticipants] = useState<
    MeetingParticipant[]
  >(getInitialParticipants());
  const [isMainVideoOn, setIsMainVideoOn] = useState(true);
  const [isMicrophoneOn, setIsMicrophoneOn] = useState(false);
  const [isShareScreenOn, setIsShareScreenOn] = useState(true);
  const [isVolumeOn, setIsVolumeOn] = useState(false);
  const [participantWantsJoin, setParticipantWantsJoin] = useState(false);
  const [paticipantAllowedMessage, setPaticipantAllowedMessage] = useState("");
  const [participantWasAllowed, setParticipantWasAllowed] = useState(false);
  const [isShowRemoveUser, setIsShowRemoveUser] = useState(false);
  const [participantIdHover, setParticipantIdHover] = useState(0);

  window.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "F9") {
      setPaticipantAllowedMessage("");
      setParticipantWantsJoin(true);
    }
  });

  const handleClickMenuIcon = (handleFunction: string) => {
    switch (handleFunction) {
      case "handleCamera":
        setIsMainVideoOn(!isMainVideoOn);
        break;
      case "handleAudio":
        setIsMicrophoneOn(!isMicrophoneOn);
        break;
      case "handleShareScreen":
        setIsShareScreenOn(!isShareScreenOn);
        break;
      case "handleVolume":
        setIsVolumeOn(!isVolumeOn);
        break;
      case "handleExit":
        handleExit();
        break;
    }
  };

  const checkState = (state: string) => {
    switch (state) {
      case "isVideoOn":
        return isMainVideoOn;
      case "isMicrophoneOn":
        return isMicrophoneOn;
      case "isShareScreenOn":
        return isShareScreenOn;
      case "isVolumeOn":
        return isVolumeOn;
    }
  };

  const handleAllowParticipantJoin = (allowed: boolean) => {
    if (allowed && meetingParticipants.length < 12) {
      setParticipantWantsJoin(false);
      const newParticipantId = meetingParticipants.length + 1;
      setMeetingParticipants([
        ...meetingParticipants,
        participants[meetingParticipants.length],
      ]);
      setPaticipantAllowedMessage("Participante entrou na sala");
      setParticipantWasAllowed(true);
      setTimeout(() => setPaticipantAllowedMessage(""), 5000);
      const participantsIds = meetingParticipants.map(
        (participant) => participant?.id
      );
      localStorage.setItem(
        "participants",
        JSON.stringify({ ids: [...participantsIds, newParticipantId] })
      );
    } else if (!allowed) {
      setParticipantWantsJoin(false);
      setPaticipantAllowedMessage("Participante foi recusado");
      setParticipantWasAllowed(false);
      setTimeout(() => setPaticipantAllowedMessage(""), 5000);
    }
  };

  const handleMouseEnter = (participantId: number) => {
    setParticipantIdHover(participantId);
    setIsShowRemoveUser(true);
  };

  const handleMouseLeave = () => {
    setIsShowRemoveUser(false);
  };

  const handleRemoveParticipant = (participantId: number) => {
    if (window.confirm("Remover participante?")) {
      const filteredParticipants = meetingParticipants.filter(
        (participant) => participant.id !== participantId
      );
      setMeetingParticipants(filteredParticipants);
      const participantsIds = filteredParticipants.map(
        (participant) => participant.id
      );
      localStorage.setItem(
        "participants",
        JSON.stringify({ ids: participantsIds })
      );
    }
  };

  const handleParticipantVideoToggle = (participantId: number) => {
    const newParticipantsArray = meetingParticipants.map((participant) => {
      if (participant.id === participantId) {
        participant.isVideoOn = !participant.isVideoOn;
      }
      return participant;
    });
    setMeetingParticipants(newParticipantsArray);
  };

  const handleExit = () => {
    const cookie = new Cookies();
    cookie.remove("auth_token");
    localStorage.removeItem("participants");
    if (window.confirm("Deseja sair da reunião?")) {
      window.location.assign("/login");
    }
  };

  return (
    <WebinarContainer>
      <SideBar
        participantWantsJoin={participantWantsJoin}
        handleAllowParticipantJoin={handleAllowParticipantJoin}
        participantWasAllowed={participantWasAllowed}
        paticipantAllowedMessage={paticipantAllowedMessage}
        isMainVideoOn={isMainVideoOn}
        meetingParticipants={meetingParticipants}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        isShowRemoveUser={isShowRemoveUser}
        participantIdHover={participantIdHover}
        handleParticipantVideoToggle={handleParticipantVideoToggle}
        handleRemoveParticipant={handleRemoveParticipant}
        menuIconsList={menuIcons}
        checkState={checkState}
        handleClickMenuIcon={handleClickMenuIcon}
      />
    </WebinarContainer>
  );
};

export default Webnar;
