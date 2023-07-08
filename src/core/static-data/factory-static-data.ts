export interface Factory {
  name: string;
  init: Init;
}

export interface Init {
  properties: Properties2;
}

export interface Properties2 {
  x: number;
  y: number;
  texture: string;
}
