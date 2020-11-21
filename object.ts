const profile = {
  names: 'mike',
  age: 20,
  loc: { long: 0, lat: 0 },
  setAge(age: number) {
    this.age = age;
  },
};

const { age, names }: { age: number; names: string } = profile;

const {
  loc: { long, lat },
  setAge,
}: {
  loc: { long: number; lat: number };
  setAge: (age: number) => void;
} = profile;
