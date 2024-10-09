import { Inject } from '@nestjs/common';
import { getServiceProvideToken } from '../utils';

export const InjectRmq = (connectionName: string) =>
  Inject(getServiceProvideToken(connectionName));