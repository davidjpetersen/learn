import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerLearningObject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LearningObject, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLearningObject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LearningObject, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LearningObject = LazyLoading extends LazyLoadingDisabled ? EagerLearningObject : LazyLearningObject

export declare const LearningObject: (new (init: ModelInit<LearningObject>) => LearningObject) & {
  copyOf(source: LearningObject, mutator: (draft: MutableModel<LearningObject>) => MutableModel<LearningObject> | void): LearningObject;
}