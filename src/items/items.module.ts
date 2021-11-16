import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Item, ItemSchema } from './items.model';
import { ItemsService } from './items.service';
import { ItemsResolver } from './items.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }]),
  ],
  providers: [ItemsService, ItemsResolver],
})
export class ItemsModule {}
