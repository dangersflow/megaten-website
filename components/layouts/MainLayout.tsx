import { Box } from "../Box";
import React, { ReactNode } from "react";
import { Navbar } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import SMTLogo from "../../public/smtlogo.png";
import { Dropdown } from "@nextui-org/react";
import { Switch, useTheme } from "@nextui-org/react";
import { Text } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const darkMode = useDarkMode(true);
  const { type, isDark } = useTheme();

  return (
    <Box css={{ minHeight: "100vh", minWidth: "100vw" }}>
      <Navbar variant={"floating"} isBordered>
        <Navbar.Brand>
          {/* <Image
            src={SMTLogo.src}
            width={70}
            alt="Logo"
            style={{ marginRight: "5rem" }}
          /> */}
          <Text
            style={{
              fontFamily: "Birch",
              fontStyle: "italic",
              fontSize: "2.3rem",
              marginLeft: "2rem",
            }}
          >
            {"Megaten Demons"}
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs">
          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button light>Shin Megami Tensei</Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu>
              <Dropdown.Item>Shin Megami Tensei 5</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button light>Persona</Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu>
              <Dropdown.Item>Persona 3</Dropdown.Item>
              <Dropdown.Item>Persona 4</Dropdown.Item>
              <Dropdown.Item>Persona 5</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Switch checked={darkMode.value} onChange={() => darkMode.toggle()} />
        </Navbar.Content>
      </Navbar>
      {children}
    </Box>
  );
};
