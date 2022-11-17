import {
  Box,
  Button,
  Code,
  Divider,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";

// List component for the array display
interface ArrayComponentProps {
  text: String;
}
const ArrayComponent = (p: ArrayComponentProps) => {
  return (
    <Box w={"100%"}>
      <Divider />
      <Text color="text">{p.text}</Text>
    </Box>
  );
};

// Separate component to confine the per-second re-renders to this component
const DateTimeDisplay = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // Set a new Date every 1000 ms (1 second)
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <Box>
      <Text color="text">Today is {date.toLocaleString()}</Text>
    </Box>
  );
};

const RampInput = () => {
  // Frontend state
  const [input, setInput] = useState("");
  const [decodedInput, setDecodedInput] = useState("");
  const [arrayInput, setArrayInput] = useState<String[]>([]);
  const toast = useToast();

  // Set state per keystroke
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
    setDecodedInput("");
  };

  // Effect for input, will set ArrayInput
  useEffect(() => {
    setArrayInput(input.split(","));
  }, [input]);

  const decodeInput = (text: string) => {
    try {
      setDecodedInput(window.atob(text));
    } catch {
      // Simple toast from ChakraUI
      toast({
        title: "Text not encoded in base 64",
        description:
          "Check that your text is base 64 encoded. If the text has commas, remove them to decode",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack w="100%" spacing={"12px"}>
      <Input
        placeholder="try, some, commas!"
        value={input}
        onChange={handleInputChange}
      />
      <Button onClick={() => decodeInput(input)}>Decode a base64 input</Button>
      <Code display={"block"} whiteSpace={"pre"} children={decodedInput} />
      {/* If input is falsy, display the DateTimeDisplay instead */}
      {input ? (
        <>
          {arrayInput.map((arrayElem) => (
            <ArrayComponent text={arrayElem} />
          ))}
        </>
      ) : (
        <DateTimeDisplay />
      )}
    </VStack>
  );
};

export default RampInput;
