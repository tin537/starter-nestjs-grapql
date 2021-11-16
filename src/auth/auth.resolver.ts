import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { authenInput } from './auth.inputs'
import { Auth } from './auth.model';
import { ValidationError } from "apollo-server-express"

@Resolver(() => Auth)
export class AuthResolver {

  constructor(private AuthService: AuthService) { }

  @Mutation(() => Auth)
  async Login(@Args('payload') payload: authenInput) {
    const user = await this.AuthService.validateUser(payload.username, payload.password)
    if (user) {
      return this.AuthService.login(payload);
    } else {
      throw new ValidationError('Username or password is incorrect!!');
    }
  }
}