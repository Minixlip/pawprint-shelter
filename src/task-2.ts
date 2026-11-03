// name,species - dog | cat | rabbit | guinnepig, age number, weight number

interface ShelterAnimal {
  name: string;
  species: 'dog' | 'cat' | 'rabbit' | 'guinea pig';
  ageYears: number;
  weightKg: number;
}

const dog1: ShelterAnimal = {
  name: 'max',
  species: 'dog',
  ageYears: 2,
  weightKg: 38,
};

const cat1: ShelterAnimal = {
  name: 'tom',
  species: 'cat',
  ageYears: 4,
  weightKg: 18,
};
