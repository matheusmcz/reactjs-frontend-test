import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 77%;
  display: flex;
  position: relative;
  justify-content: flex-end;
  border-radius: 20px;
`;

export const BgVideo = styled.div`
  background-color: #eff2f8;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
`;

export const Cam = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: black;
`;

export const Content = styled.div`
  margin-top: 15px;
  margin-right: 10px;
  height: 93%;
  width: 140px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Box = styled.div`
  position: relative;
  width: 130px;
  height: 130px;
  margin-bottom: 10px;
  border-radius: 20px;
`;
