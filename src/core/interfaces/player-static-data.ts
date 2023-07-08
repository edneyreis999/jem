export interface Player {
  name: string;
  init: Init;
}

export interface Init {
  properties: Properties;
}

export interface Properties {
  gold: number;
}
