import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Input,
  InputGroup,
  Select,
} from '@chakra-ui/react';

export default function Signup({ isOpen, onClose }) {
  const [selectGrade, setSelectGrade] = useState('');

  const grades = ['6th', '7th', '8th', '9th', '10th', '11th', '12th'];

  const schools = {
    middle: [
      'Lovelace Middle School',
      'Hopper Middle School',
      'Johnson Middle School',
      'Bartik Middle School',
    ],
    high: [
      'Perlman High School',
      'Goldwasser High School',
      'Conway High School',
    ],
  };

  const schoolsByGrade = selectGrade
    ? ['6th', '7th', '8th'].includes(selectGrade)
      ? schools.middle
      : schools.high
    : [];

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent w="335px">
        <ModalHeader fontWeight={700}>Create account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={2.5}>
          <FormControl isRequired>
            <InputGroup>
              <Input placeholder="Full Name" />
            </InputGroup>
          </FormControl>

          <FormControl mt={4}>
            <InputGroup>
              <Input placeholder="Email" type="email" />
            </InputGroup>
          </FormControl>

          <FormControl mt={4}>
            <InputGroup>
              <Input placeholder="Password" />
            </InputGroup>
          </FormControl>

          <FormControl mt={4}>
            <Select
              placeholder="Grade"
              value={selectGrade}
              onChange={(e) => setSelectGrade(e.target.value)}
            >
              {grades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl mt={4}>
            <Select placeholder="School">
              {schoolsByGrade.map((school) => (
                <option key={school} value={school}>
                  {school}
                </option>
              ))}
            </Select>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="yellow" mx={2} w="100%">
            Signup
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
