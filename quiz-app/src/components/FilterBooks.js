import React from 'react';
import {
  Flex,
  Select,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import { grades, subjects } from '../data/data';
import { useSelectSchool } from '../hooks/useSelectSchool';
import { SearchIcon } from '@chakra-ui/icons';

export default function FilterBooks() {
  const [selectGrade, setSelectGrade, schoolsByGrade] = useSelectSchool();

  return (
    <Flex direction="row" gap={5} mt={4}>
      <FormControl>
        <FormLabel>Grade</FormLabel>
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

      <FormControl>
        <FormLabel>School</FormLabel>
        <Select placeholder="School">
          {schoolsByGrade.map((school) => (
            <option key={school} value={school}>
              {school}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Subject</FormLabel>
        <Select placeholder="Subject">
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Search</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search by title" />
        </InputGroup>
      </FormControl>
    </Flex>
  );
}
