import Resource from 'typings/IResource';

const movies: object[] = [];

export default class MoviesApi implements Resource {
  create(data: object): object {
    movies.push(data);
    return data;
  }

  findMany(): object[] {
    return movies;
  }
}
