const { Repository } = require('./solution.js')

const { assert } = require('chai')


describe('test add(entity)', () => {
    it('must throw `Property is missing` from the entity if missing', () => {
        //Initialize the repository
        let repository = new Repository({ name: "string", age: "number", birthday: "object" });
        assert.throws(() => repository.add({ a: 'A', age: 2, birthday: {} }), Error, `Property name is missing from the entity!`)
        assert.throws(() => repository.add({ name: 'A', b: 2, birthday: {} }), Error, `Property age is missing from the entity!`)
        assert.throws(() => repository.add({ name: 'A', age: 2, c: {} }), Error, `Property birthday is missing from the entity!`)
    })

    it('must throw `Property is not of correct type` if not correct type', () => {
        //Initialize the repository
        let repository = new Repository({ name: "string", age: "number", birthday: "object" });
        assert.throws(() => repository.add({ name: 1, age: 2, birthday: {} }), TypeError, `Property name is not of correct type!`)
        assert.throws(() => repository.add({ name: 'A', age: 'A', birthday: {} }), TypeError, `Property age is not of correct type!`)
        assert.throws(() => repository.add({ name: 'A', age: 2, birthday: 22 }), TypeError, `Property birthday is not of correct type!`)
    })

    it('must return entity id if valid', () => {
        //Initialize the repository
        let repository = new Repository({ name: "string", age: "number", birthday: "object" });
        assert.equal(repository.add({ name: 'AA', age: 1, birthday: {} }), 0)
        assert.equal(repository.add({ name: 'BB', age: 2, birthday: {} }), 1)
    })
});

describe('test getId(id)', () => {// Initialize props object       
    it('must throw error `Entity does not exist` if invalid id', () => {
        //Initialize the repository
        let repository = new Repository({ name: "string", age: "number", birthday: "object" });
        assert.throws(() => repository.getId(0), Error, 'Entity with id: 0 does not exist!')
        repository.add({ name: 'AA', age: 1, birthday: {} })
        assert.throws(() => repository.getId(1), Error, 'Entity with id: 1 does not exist!')
    })

    it('must return if param is valid', () => {
        //Initialize the repository
        let repository = new Repository({ name: "string", age: "number", birthday: "object" });
        repository.add({ name: 'AA', age: 1, birthday: {} })
        repository.add({ name: 'BB', age: 2, birthday: {} })
        assert.doesNotThrow(() => repository.getId(0))
        assert.doesNotThrow(() => repository.getId(1))

        assert.equal(repository.getId(0).name, 'AA')
        assert.equal(repository.getId(0).age, 1)
        assert.equal(repository.getId(1).name, 'BB')
        assert.equal(repository.getId(1).age, 2)
    })
})

describe('test update(id, newEntity)', () => {
    it('must throw `Entity with id does not exist` if invalid id', () => {
        //Initialize the repository
        let repository = new Repository({ name: "string", age: "number", birthday: "object" });
        assert.throws(() => repository.update(0, { name: 'AA', age: 1, birthday: {} }), Error, "Entity with id: 0 does not exist!")
    })

    it('must throw `Property is missing from the entity` if missing', () => {
        //Initialize the repository
        let repository = new Repository({ name: "string", age: "number", birthday: "object" });
        repository.add({ name: 'AA', age: 1, birthday: {} })

        assert.throws(() => repository.update(0, { a: 1, age: 2, birthday: {} }), Error, `Property name is missing from the entity!`)
        assert.throws(() => repository.update(0, { name: 1, b: 2, birthday: {} }), Error, `Property age is missing from the entity!`)
        assert.throws(() => repository.update(0, { name: 1, age: 2, c: {} }), Error, `Property birthday is missing from the entity!`)
    })

    it('must throw `Property is not of correct type` if not correct type', () => {
        //Initialize the repository
        let repository = new Repository({ name: "string", age: "number", birthday: "object" });
        repository.add({ name: 'AA', age: 1, birthday: {} })

        assert.throws(() => repository.update(0, { name: 1, age: 2, birthday: {} }), TypeError, `Property name is not of correct type!`)
        assert.throws(() => repository.update(0, { name: 'A', age: 'A', birthday: {} }), TypeError, `Property age is not of correct type!`)
        assert.throws(() => repository.update(0, { name: 'A', age: 2, birthday: 22 }), TypeError, `Property birthday is not of correct type!`)
    })

    it('must update if existing', () => {
        //Initialize the repository
        let repository = new Repository({ name: "string", age: "number", birthday: "object" });
        repository.add({ name: 'AA', age: 1, birthday: {} })

        assert.equal(repository.getId(0).name, 'AA')
        // assert.deepEqual(repository.getId(0), { name: 'AA', age: 1, birthday: {} })
        repository.update(0, { name: 'BB', age: 2, birthday: {} })
        // assert.deepEqual(repository.getId(0), { name: 'BB', age: 2, birthday: {} })
        assert.equal(repository.getId(0).name, 'BB')
    })
})

describe('test del(id)', () => {
    it('must throw Entity with id does not exist if invalid id', () => {
        //Initialize the repository
        let repository = new Repository({ name: "string", age: "number", birthday: "object" });

        assert.throws(() => repository.del(0), Error, "Entity with id: 0 does not exist!")
    })

    it('must delete if existing', () => {
        //Initialize the repository
        let repository = new Repository({ name: "string", age: "number", birthday: "object" });

        repository.add({ name: 'AA', age: 1, birthday: {} })
        repository.add({ name: 'BB', age: 2, birthday: {} })
        assert.doesNotThrow(() => repository.del(1))
        assert.doesNotThrow(() => repository.del(0))
    })
})

describe('test count', () => {
    it('must return correct count of objects in map', () => {
        //Initialize the repository
        let repository = new Repository({ name: "string", age: "number", birthday: "object" });

        assert.equal(repository.count, 0)

        repository.add({ name: 'AA', age: 1, birthday: {} })
        assert.equal(repository.count, 1)

        repository.add({ name: 'BB', age: 2, birthday: {} })
        assert.equal(repository.count, 2)
    })
})


