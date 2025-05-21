import {CredentialDto} from "./credential.dto";

export interface JaimeDto{
  idLike: string
  credential_id: CredentialDto;
  idPublication: string;
  idCommentaire: string;
  created: Date;
}
