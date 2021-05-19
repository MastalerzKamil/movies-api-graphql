import { Field, ID, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateMovieInput {
  @Field(() => ID, { nullable: true })
  id?: string;

  @Field()
  title: string;

  @Field(() => Int)
  year: number;

  @Field()
  description: string;
}
