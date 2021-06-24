import { currencies } from "../utils/generic";

export interface CSHookResponse<Data> {
  data?: Data;
  error?: string;
}

export interface CSResponse<Data> {
  meta: {
    code: string;
    disclaimer: string;
  };
  response: Data;
}

export interface CSError {
  meta: {
    code: string;
    error_detail: string;
    error_type: string;
  };
  response: [];
}

export interface CSLatest {
  base: string;
  date: string;
  rates: CSRates;
}

export type CSCurrencies = typeof currencies[number];
export type CSRates = { [K in CSCurrencies]: number };
