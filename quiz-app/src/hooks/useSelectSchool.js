import { useState } from 'react';
import { schools } from '../data/data';

export const useSelectSchool = () => {
  const [selectGrade, setSelectGrade] = useState('');

  const schoolsByGrade = selectGrade
    ? ['6th', '7th', '8th'].includes(selectGrade)
      ? schools.middle
      : schools.high
    : [];

  return [selectGrade, setSelectGrade, schoolsByGrade];
};
