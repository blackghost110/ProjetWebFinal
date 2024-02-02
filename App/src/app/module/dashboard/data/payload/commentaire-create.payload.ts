import {Payload} from "@shared";

export interface CommentaireCreatePayload extends Payload{
  contenu: string;
  credential_id: string;
  idPublication: string;
}
