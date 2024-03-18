"use client";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  return (
    <div className="fixed">
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />

        <MenuList>
          <MenuItem>Home</MenuItem>
          <MenuItem>Post</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
