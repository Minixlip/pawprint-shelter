interface ShelterProp {
  name: string;
  age: number;
}

function bark(): string {
  return 'Woof';
}

const returnAnimalDetails = (animal: ShelterProp) => {
  return animal;
};
