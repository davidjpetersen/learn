// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { LearningObject } = initSchema(schema);

export {
  LearningObject
};