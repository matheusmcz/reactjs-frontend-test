import React from "react";
import { IconType } from "react-icons";
import { Content, Container } from "./styles";

interface MenuIcons {
  state: string;
  icon: IconType;
  iconOff: IconType;
  size: number;
  color: string;
  handleClick: string;
  tooltip: string;
}

interface MenuProps {
  menuIcons: MenuIcons[];
  checkState: (state: string) => boolean | undefined;
  handleClickMenuIcon: (handleFunction: string) => void;
}

const Menu: React.FC<MenuProps> = ({
  menuIcons,
  checkState,
  handleClickMenuIcon,
}) => {
  return (
    <Container>
      {menuIcons.map((menuIcon) => {
        if (checkState(menuIcon.state)) {
          return (
            <Content>
              <menuIcon.icon
                className="menuIcon"
                size={menuIcon.size}
                color={menuIcon.color}
                onClick={() => handleClickMenuIcon(menuIcon.handleClick)}
                title={menuIcon.tooltip}
              />
            </Content>
          );
        } else {
          return (
            <Content>
              <menuIcon.iconOff
                className="menuIcon"
                size={menuIcon.size}
                color={menuIcon.color}
                onClick={() => handleClickMenuIcon(menuIcon.handleClick)}
                title={menuIcon.tooltip}
              />
            </Content>
          );
        }
      })}
    </Container>
  );
};

export default Menu;
