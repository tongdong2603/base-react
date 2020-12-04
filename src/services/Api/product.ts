import Http from '@services/Http';
import { PRODUCT_API } from '@definitions/api';
import { compileUrl } from '@utils/index';

export const getProductById = (options: ValueOptions | undefined) =>
  Http.get(compileUrl(PRODUCT_API.BY_ID, options?.params));
