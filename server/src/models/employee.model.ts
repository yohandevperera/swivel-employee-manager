export default interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  gender: "M" | "F";
  photo: string;
}
