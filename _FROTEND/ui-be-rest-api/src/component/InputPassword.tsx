import { InputGroup, InputRightElement, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

export default function InputPassword(props: {
  placeholder: string;
  name: string;
  onChange: any;
  value: any;
}) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
