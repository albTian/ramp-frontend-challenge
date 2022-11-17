import { HStack, Input, Text, VStack } from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";

// const ArrayComponent = (text: String) => <Text>{text}</Text>;

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
      {arrayInput && (
        <VStack>
          {arrayInput.map((arrayElem) => (
            <Text>{arrayElem}</Text>
          ))}
        </VStack>
      )}
    </VStack>
  );
};

export default RampInput;
