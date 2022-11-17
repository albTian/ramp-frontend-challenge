import { Box, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";

interface ArrayComponentProps {
  text: String;
}
const ArrayComponent = (p: ArrayComponentProps) => {
  return (
    <Box>
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
  const [arrayInput, setArrayInput] = useState<String[]>([]);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  useEffect(() => {
    setArrayInput(input.split(","));
  }, [input]);
  return (
    <VStack w="50%" spacing={"12px"}>
      <Input
        placeholder="try, some, commas!"
        value={input}
        onChange={handleInputChange}
      />
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
