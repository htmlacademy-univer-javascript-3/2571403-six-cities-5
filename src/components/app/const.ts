export enum AppRoute {
    Login = '/login',
    Main = '/main',
    Favorites = '/favorites',
    Offer = '/offer/:id'
}

export enum AutorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}
