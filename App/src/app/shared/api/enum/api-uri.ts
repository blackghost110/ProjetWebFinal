export enum ApiURI{
  SIGN_IN='account/signin',
  SIGN_UP='account/signup',
  ME='account/me',
  REFRESH_TOKEN = 'account/refresh',

  PUBLICATION_CREATE = 'publication/create',
  PUBLICATION_LIST = 'publication/list',
  PUBLICATION_DETAIL = 'publication/publication-detail',

  PROFIL_LIST = 'profil/profil-detail',
  PROFIL_UPDATE = 'profil/update',

  COMMENTAIRE_CREATE = 'commentaire/create',
  COMMENTAIRE_LIST = 'commentaire/list',
  COMMENTAIRE_LIST_SELECTED = 'commentaire/list/:id'

}
