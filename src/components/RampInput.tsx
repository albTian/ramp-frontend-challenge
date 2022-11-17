import {
  Box,
  Button,
  Code,
  HStack,
  Input,
  Text,
  Toast,
  useToast,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";

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
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <Box>
      <Text color="text">Today is {date.toLocaleString()}</Text>
    </Box>
  );
};

const RampInput = () => {
  const [input, setInput] = useState("");
  const [decodedInput, setDecodedInput] = useState("");
  const [arrayInput, setArrayInput] = useState<String[]>([]);
  const toast = useToast();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newInput = e.target.value;
    setInput(newInput);
    setDecodedInput("");
  };

  useEffect(() => {
    setArrayInput(input.split(","));
  }, [input]);

  const decodeInput = (text: string) => {
    try {
      setDecodedInput(window.atob(text));
    } catch {
      toast({
        title: "Text not encoded in base 64",
        description: "Check that your text is base 64 encoded. If the text has commas, remove them to decode",
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
