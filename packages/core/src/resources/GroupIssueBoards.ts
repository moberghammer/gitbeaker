import { BaseResourceOptions } from '@gitbeaker/requester-utils';
import { GroupSchema } from './Groups';
import { ResourceIssueBoards } from '../templates';
import { IssueBoardSchema, IssueBoardListSchema } from '../templates/types';
import {
  BaseRequestOptions,
  PaginatedRequestOptions,
  Sudo,
  CamelizedResponse,
} from '../infrastructure';

export interface GroupIssueBoardSchema extends IssueBoardSchema {
  group: Pick<GroupSchema, 'id' | 'name' | 'web_url'>;
}

export interface GroupIssueBoards<C extends boolean = false> extends ResourceIssueBoards<C> {
  all(
    groupId: string | number,
    options?: PaginatedRequestOptions,
  ): Promise<CamelizedResponse<C, IssueBoardSchema>[]>;

  create(
    groupId: string | number,
    name: string,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, GroupIssueBoardSchema>>;

  createList(
    groupId: string | number,
    boardId: number,
    labelId: number | string,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, IssueBoardListSchema>>;

  edit(
    groupId: string | number,
    boardId: number,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, GroupIssueBoardSchema>>;

  editList(
    groupId: string | number,
    boardId: number,
    listId: number,
    position: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, IssueBoardListSchema>>;

  lists(
    groupId: string | number,
    boardId: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, IssueBoardListSchema>[]>;

  remove(groupId: string | number, boardId: number, options?: Sudo): Promise<void>;

  removeList(
    groupId: string | number,
    boardId: number,
    listId: number,
    options?: Sudo,
  ): Promise<void>;

  show(
    groupId: string | number,
    boardId: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, GroupIssueBoardSchema>>;

  showList(
    groupId: string | number,
    boardId: number,
    listId: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, IssueBoardListSchema>>;
}

export class GroupIssueBoards<C extends boolean = false> extends ResourceIssueBoards<C> {
  constructor(options: BaseResourceOptions<C>) {
    /* istanbul ignore next */
    super('groups', options);
  }
}
