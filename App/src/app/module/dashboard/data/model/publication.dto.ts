import {CredentialDto} from "./credential.dto";

export interface PublicationDto{
    credential_id: CredentialDto;
    idPublication: string;
    created: Date;
    contenu: string;
    typePublication: string;
}
