export interface BuildingStaticData {
  name: string;
  init: Init;
}

export interface Init {
  properties: Properties;
}

export interface Properties {
  x: number;
  y: number;
  texture: string;
}
