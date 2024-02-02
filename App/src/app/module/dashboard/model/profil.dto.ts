import {CredentialDto} from "./credential.dto";

export interface ProfilDto {
    credential_id: CredentialDto;
    photoProfil: string;
    description: string;
    status: string;
    email: string;
    nom: string;
    prenom: string;
    idProfil: string;
}
