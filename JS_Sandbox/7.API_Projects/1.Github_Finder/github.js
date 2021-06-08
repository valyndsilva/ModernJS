// Client Secret for Github OAuth App: a9f550c58cdbfed1afd491ad2ef5fcce44132d56
// Client ID: 2e23f24a352e3d4ba0b0

class Github {
    constructor() {
      this.client_id = '2e23f24a352e3d4ba0b0';
      this.client_secret = 'a9f550c58cdbfed1afd491ad2ef5fcce44132d56';
    }
  
    async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const profile = await profileResponse.json();
  
      return {
        profile
      }
    }
  }
  