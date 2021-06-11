
  // III.FACTORY PATTERN:
  //  A way of creating an interface for creating objects but let subclasses to define which classes to instantiate
  // Factory methods are used in applications to manage, maintain, manipulate collections of objects that are different but have common characteristics. 
  // Ex: Memberships. Create a MemberFactory that takes a member type and creates a new object based on that type.
  
  function MemberFactory() {
    this.createMember = function(name, type) { //function expression
      let member;
  
      if(type === 'simple') {
        member = new SimpleMembership(name);
      } else if (type === 'standard') {
        member = new StandardMembership(name);
      } else if (type === 'super') {
        member = new SuperMembership(name);
      }
  
      member.type = type;
  
      member.define =  function() {
        console.log(`${this.name} (${this.type}): ${this.cost}`);
      }
  
      return member;
    }
  }
  
  const SimpleMembership = function(name) {
    this.name = name;
    this.cost = '$5';
  }
  
  const StandardMembership = function(name) {
    this.name = name;
    this.cost = '$15';
  }
  
  const SuperMembership = function(name) {
    this.name = name;
    this.cost = '$25';
  }
  
  const members = [];
  const factory = new MemberFactory();
  
  members.push(factory.createMember('John Doe', 'simple'));
  members.push(factory.createMember('Chris Jackson', 'super'));
  members.push(factory.createMember('Janice Williams', 'simple'));
  members.push(factory.createMember('Tom Smith', 'standard'));
  
  // console.log(members);
  
  members.forEach(function(member) {
    member.define();
  });
