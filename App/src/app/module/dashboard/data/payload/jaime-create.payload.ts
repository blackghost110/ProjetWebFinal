import {Payload} from "@shared";

export interface JaimeCreatePayload extends Payload{
  idLike: string;
  credential_id: string;
  idPublication: string;
  idCommentaire: string;
}
