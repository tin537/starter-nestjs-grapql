import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppService {

  @Query(() => String)
  getHello(): string {
    return 'Hello World!';
  }
}