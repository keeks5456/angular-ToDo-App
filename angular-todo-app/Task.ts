//our task interface

export interface Task {
  id?: number; //question mark means make optional
  text: string;
  day: string;
  reminder: boolean;

}