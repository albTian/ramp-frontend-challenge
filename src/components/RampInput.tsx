import { Box, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";

interface ArrayComponentProps {
  text: String;
}
const ArrayComponent = (p: ArrayComponentProps) => {
  return (
    <Box>
      <Text>{p.text}</Text>
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
      <Box>{date.toTimeString()}</Box>
    </Box>
  );
};

const RampInput = () => {
  const [input, setInput] = useState("");
  const [arrayInput, setArrayInput] = useState<String[]>([]);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  useEffect(() => {
    setArrayInput(input.split(","));
  }, [input]);
  return (
    <VStack w="50%">
      <Input
        placeholder="to type an array, simply separate statements with commas"
        value={input}
        onChange={handleInputChange}
      />
      {input ? (
        <VStack>
          {arrayInput.map((arrayElem) => (
            <ArrayComponent text={arrayElem} />
          ))}
        </VStack>
      ) : (
        <DateTimeDisplay />
      )}
    </VStack>
  );
};

export default RampInput;
