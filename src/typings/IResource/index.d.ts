export default interface Resource {
  create(data: object): object;
  findMany(): object[];
}
