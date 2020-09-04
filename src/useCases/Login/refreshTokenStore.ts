export class RefreshTokenStore {
    constructor () {
        this.refreshTokens = []
    }

    refreshTokens: Array<string>

    add(token: string, user: string) {
        this.refreshTokens[token] = user;
    }

    revoke(token: string) {
        delete this.refreshTokens[token];
    }

    check(token: string, user: string): boolean{
        if (!this.refreshTokens[token]){
            return false;
        }else return this.refreshTokens[token] === user;
    }
}
