import { BsMic, BsMicMute } from "react-icons/bs";
import { CgScreen } from "react-icons/cg";
import { FiVideo, FiVideoOff, FiVolume2, FiVolumeX } from "react-icons/fi";
import { IoExitOutline } from "react-icons/io5";
import { FaRegWindowClose } from "react-icons/fa";
import Participant from "../../utils/Participant";
import DashboardIcons from "../../utils/DashboardIcons";

export const participants = [
  new Participant(10, "Matheus", "video03.mp4", true),
  new Participant(20, "Beatriz", "video02.mp4", true),
  new Participant(30, "Gustavo", "video03.mp4", true),
  new Participant(40, "Herta", "video02.mp4", true),
  new Participant(50, "Marieta", "video02.mp4", true),
  new Participant(60, "Eusebio", "video03.mp4", true),
  new Participant(70, "Rosineide", "video02.mp4", true),
  new Participant(80, "Amanda", "video02.mp4", true),
];

export let menuIcons = [
  new DashboardIcons(
    "isVideoOn",
    FiVideo,
    FiVideoOff,
    35,
    "#6200FF",
    "handleCamera",
    "Câmera"
  ),
  new DashboardIcons(
    "isMicrophoneOn",
    BsMic,
    BsMicMute,
    30,
    "#FFBD2D",
    "handleAudio",
    "Microfone"
  ),
  new DashboardIcons(
    "isShareScreenOn",
    CgScreen,
    FaRegWindowClose,
    35,
    "#FF0049",
    "handleShareScreen",
    "Comparilhar Tela"
  ),
  new DashboardIcons(
    "isVolumeOn",
    FiVolume2,
    FiVolumeX,
    30,
    "#FF90BB",
    "handleVolume",
    "Som"
  ),
  new DashboardIcons(
    "",
    IoExitOutline,
    IoExitOutline,
    35,
    "#8C00FF",
    "handleExit",
    "Sair"
  ),
];
