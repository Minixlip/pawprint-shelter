import type { ShelterAnimal } from './task-2';

type jeff = {
  level: 1 | 2 | 3;
};

const alert: jeff = {
  level: 3,
};

interface Microchipped {
  chipNumber: number;
}

const dog1: ShelterAnimal & Microchipped = {
  name: 'craig',
  species: 'guinea pig',
  ageYears: 24,
  weightKg: 50,
  chipNumber: 67,
};
