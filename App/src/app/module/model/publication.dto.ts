import {CredentialDto} from "./credential.dto";

export interface PublicationDto{
    credential_id_fk: CredentialDto;
    idPublication: string;
    date_de_publication: string;
    contenu: string;
    typePublication: string;
}
