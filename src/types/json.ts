export type JSONValue = 
  | string
  | number
  | boolean
  | null
  | readonly JSONValue[]
  | { readonly [key: string]: JSONValue };

export type DBObject = {
  readonly [key: string]: JSONValue,
};

export type DBRecord = DBObject | DBObject[];
