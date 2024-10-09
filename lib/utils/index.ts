import { RMQ_CONFIG_TOKEN, RMQ_TOKEN_SERVICE_TOKEN } from "../constant/rmq.constant";


export const getConfigProvideToken = (connectionName: string) => {
  return `${connectionName}.${RMQ_CONFIG_TOKEN}`;
};

export const getServiceProvideToken = (connectionName: string) => {
  return `${connectionName}.${RMQ_TOKEN_SERVICE_TOKEN}`;
};