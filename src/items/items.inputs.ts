import { Schema as MongooseSchema } from 'mongoose';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateItemInput {
    @Field(() => String, { nullable: false })
    name: string;
    @Field(() => String, { nullable: true })
    status?: boolean;
    @Field(() => String, { nullable: false })
    link: string;
    
}

@InputType()
export class ListItemInput {
    _id?: MongooseSchema.Types.ObjectId;
    @Field(() => String, { nullable: true })
    user?: string;
    @Field(() => String, { nullable: true })
    name?: string;
    @Field(() => Boolean, { nullable: true })
    status?: boolean;
    @Field(() => String, { nullable: true })
    link?: string;
}

@InputType()
export class UpdateItemInput {
    _id: MongooseSchema.Types.ObjectId;
    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => Boolean, { nullable: true })
    status?: boolean;

    @Field(() => String, { nullable: true })
    link?: string;
}