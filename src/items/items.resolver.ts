import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

import { Item } from './items.model';
import { ItemsService } from './items.service';
import {
  CreateItemInput,
  ListItemInput,
  UpdateItemInput,
} from './items.inputs';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GraphqlJwtAuthGuard } from '../graphql-jwt-auth.guard';

@Resolver(() => Item)
export class ItemsResolver {
  constructor(private ItemService: ItemsService) {}

  @UseGuards(GraphqlJwtAuthGuard)  
  @Query(() => Item)
  async Item(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.ItemService.getById(_id);
  }

  @UseGuards(GraphqlJwtAuthGuard)  
  @Query(() => [Item])
  async Items(@Args('filters', { nullable: true }) filters?: ListItemInput) {
    return this.ItemService.list(filters);
  }

  @UseGuards(GraphqlJwtAuthGuard)
  @Mutation(() => Item)
  async createItem(@Args('payload') payload: CreateItemInput) {
    return this.ItemService.create(payload);
  }

  @UseGuards(GraphqlJwtAuthGuard)  
  @Mutation(() => Item)
  async updateItem(@Args('payload') payload: UpdateItemInput) {
    return this.ItemService.update(payload);
  }

  @UseGuards(GraphqlJwtAuthGuard)  
  @Mutation(() => Item)
  async deleteItem(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.ItemService.delete(_id);
  }
}