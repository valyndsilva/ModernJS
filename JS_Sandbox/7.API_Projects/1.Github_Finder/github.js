// Client Secret for Github OAuth App: a9f550c58cdbfed1afd491ad2ef5fcce44132d56
// Client ID: 2e23f24a352e3d4ba0b0

class Github {
    constructor() {
      this.client_id = '2e23f24a352e3d4ba0b0';
      this.client_secret = 'a9f550c58cdbfed1afd491ad2ef5fcce44132d56';
      this.repos_count = 5;
      this.repos_sort = 'created: asc';
    }
  
    async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
      //fetch lastest 5 repos of the user
      const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const profile = await profileResponse.json();
      const repos = await reposResponse.json();
      return {
        //   profile: profile,
        profile,
        // repos : repos
        repos
      }
    }
  }
  