import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';

import { Item, ItemDocument } from './items.model';
import {
  CreateItemInput,
  ListItemInput,
  UpdateItemInput,
} from './items.inputs';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item.name) private ItemModel: Model<ItemDocument>,
  ) {}

  create(payload: CreateItemInput) {
    const createdItem = new this.ItemModel(payload);
    return createdItem.save();
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.ItemModel.findById(_id).exec();
  }

  list(filters: ListItemInput) {
    return this.ItemModel.find({ ...filters }).exec();
  }

  update(payload: UpdateItemInput) {
    return this.ItemModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.ItemModel.findByIdAndDelete(_id).exec();
  }
}