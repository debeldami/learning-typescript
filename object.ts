const profile = {
  name: 'mike',
  age: 20,
  loc: { long: 0, lat: 0 },
  setAge(age: number) {
    this.age = age;
  },
};

const { age, name }: { age: number; name: string } = profile;

const {
  loc: { long, lat },
  setAge,
}: {
  loc: { long: number; lat: number };
  setAge: (age: number) => void;
} = profile;
