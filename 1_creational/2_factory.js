// membership
class SimpleMembership {
    constructor (name) {
        this.name = name
        this.cost = 50
    }
}

class StandardMembership {
    constructor (name) {
        this.name = name
        this.cost = 150
    }
}

class PremiumMembership {
    constructor (name) {
        this.name = name
        this.cost = 500
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership
    }

    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple
        const member = new Membership(name)
        member.type = type
        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }

        return member
    }
}

const factory = new MemberFactory()

const members = [
    factory.create('Yegor', 'simple'),
    factory.create('Ekaterina', 'premium'),
    factory.create('Vasiliy', 'standard'),
    factory.create('Ivan')
]
members.forEach(m => m.define())
