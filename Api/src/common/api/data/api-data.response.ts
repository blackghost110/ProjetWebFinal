import { ApiCodeResponse } from '@common/api/data/enum';

export interface ApiDataResponse {
  result: boolean; // true
  code: ApiCodeResponse; // STOCK_DETAIL_SUCCESS
  data: any; // les details du stock demandé
}
