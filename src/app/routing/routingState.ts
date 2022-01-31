import { YieldsRecord } from "./yields";
import { RoutingException } from './routingException';

export class RoutingState {
  name?: string;
  craetedAt?: string;
  modifiedAt?: string;
  id?: string;
  error?: RoutingException;
  yields?: YieldsRecord;
}