import {CredentialDto} from "./credential.dto";

export interface ProfilDto {
    credential_id: CredentialDto;
    nom: string;
    prenom: string;
    description: string;
    photoProfil: string;
    status: string;
    email: string;
    idProfil: string;
}
