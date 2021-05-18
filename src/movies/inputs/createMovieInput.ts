import { Field, ID, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateMovieInput {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field(() => Int)
  year: number;

  @Field()
  description: string;
}
