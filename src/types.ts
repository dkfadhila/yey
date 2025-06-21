export interface Student {
  nim: string;
  name: string;
  class: string;
}

export interface Grade {
  category: string; // teori | praktikum | kuis | portofolio | projek
  score: number;
  min: number;
  max: number;
  avg: number;
  comment: string;
}
