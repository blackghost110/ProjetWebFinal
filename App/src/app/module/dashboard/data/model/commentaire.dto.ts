import {CredentialDto} from "./credential.dto";

export interface CommentaireDto{
  credential_id: CredentialDto;
  idPublication: string;
  idCommentaire: string;
  created: Date;
  contenu: string;
}
