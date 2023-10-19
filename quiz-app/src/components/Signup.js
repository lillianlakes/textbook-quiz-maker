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

export default function Signup({ isOpen, onClose }) {
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

          <FormControl mt={4} isRequired>
            <InputGroup>
              <Input placeholder="Email" type="email" />
            </InputGroup>
          </FormControl>

          <FormControl mt={4} isRequired>
            <InputGroup>
              <Input placeholder="Password" />
            </InputGroup>
          </FormControl>

          <FormControl mt={4}>
            <Select placeholder="Grade">
              <option value="1">grade</option>
            </Select>
          </FormControl>

          <FormControl mt={4}>
            <Select placeholder="School">
              <option>school</option>
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
