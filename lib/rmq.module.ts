import { DynamicModule, Module } from '@nestjs/common';
import { RmqService } from './services/rmq.service';
import { IRmqOptions } from './type/rmq.options';
import { getConfigProvideToken, getServiceProvideToken } from './utils';


@Module({})
export class RmqModule {
  static registerAsync(configuration: {
    connectionName: string;
    useFactory: (...arg: any[]) => Promise<IRmqOptions> | IRmqOptions;
    inject?: any[];
  }): DynamicModule {
    const configProvideToken = getConfigProvideToken(
      configuration.connectionName,
    );
    const serviceProvideToken = getServiceProvideToken(
      configuration.connectionName,
    );

    return {
      module: RmqModule,
      providers: [
        {
          provide: configProvideToken,
          useFactory: configuration.useFactory,
          inject: configuration.inject ?? [],
        },
        {
          provide: serviceProvideToken,
          inject: [configProvideToken],
          useFactory: (config: IRmqOptions) => new RmqService(config),
        },
      ],
      exports: [
        {
          provide: serviceProvideToken,
          useExisting: serviceProvideToken,
        },
      ],
    };
  }
}
