import {Payload} from "@shared";

export interface ProfilUpdatePayload extends Payload{
  idProfil: string;
  nom: string;
  prenom: string;
  description: string;
  status: string;
  photoProfil: string;
  email: string;
}
