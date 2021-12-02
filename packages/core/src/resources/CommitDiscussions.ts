import { BaseResourceOptions } from '@gitbeaker/requester-utils';
import { ResourceDiscussions } from '../templates';
import { DiscussionSchema } from '../templates/types';
import {
  BaseRequestOptions,
  PaginatedRequestOptions,
  Sudo,
  CamelizedResponse,
} from '../infrastructure';

export interface CommitDiscussions<C extends boolean = false> extends ResourceDiscussions<C> {
  addNote(
    projectId: string | number,
    commitId: number,
    discussionId: number,
    noteId: number,
    body: string,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, DiscussionSchema>>;

  all(
    projectId: string | number,
    commitId: number,
    options?: PaginatedRequestOptions,
  ): Promise<CamelizedResponse<C, DiscussionSchema>[]>;

  create(
    projectId: string | number,
    commitId: number,
    body: string,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, DiscussionSchema>>;

  editNote(
    projectId: string | number,
    commitId: number,
    discussionId: number,
    noteId: number,
    options: BaseRequestOptions & { body: string },
  ): Promise<CamelizedResponse<C, DiscussionSchema>>;

  removeNote(
    projectId: string | number,
    commitId: number,
    discussionId: number,
    noteId: number,
    options?: Sudo,
  ): Promise<void>;

  show(
    projectId: string | number,
    commitId: number,
    discussionId: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, DiscussionSchema>>;
}

export class CommitDiscussions<C extends boolean = false> extends ResourceDiscussions<C> {
  constructor(options: BaseResourceOptions<C>) {
    /* istanbul ignore next */
    super('projects', 'repository/commits', options);
  }
}
