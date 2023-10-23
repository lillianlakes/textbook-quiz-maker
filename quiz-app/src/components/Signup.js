import React from 'react';
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
import { grades } from '../data/data';
import { useSelectSchool } from '../hooks/useSelectSchool';

export default function Signup({ isOpen, onClose }) {
  const [selectGrade, setSelectGrade, schoolsByGrade] = useSelectSchool();

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
