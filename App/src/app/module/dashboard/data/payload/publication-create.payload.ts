import {Payload} from "@shared";
//import {Credential} CORRIGERRRRRRRRRRRRR

export interface PublicationCreatePayload extends Payload{
  contenu: string;
  typePublication: string;
  posteur: string; // au lieu de Credential
}
