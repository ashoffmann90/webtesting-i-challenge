const {repair, add, succeed, fail} = require('./enhancer.js');

const item = {
    name: 'piano',
    enhancement: 10,
    durability: 50
}

describe('enhancer', () => {
    describe('repair item', () => {
        it('should reset durability to 100', () => {
            expect(repair({...item}))
            .toStrictEqual({...item, durability: 100})
        })
    })

    describe('succeed enhancement', () => {
        it('add 1 enhance if enhance < 20', () => {
            expect(succeed({...item, enhancement: 10}))
            .toEqual({...item, enhancement: ++item.enhancement })
        })
    })

    describe('fail', () => {
        it('subtract 5 if enhance < 15', () => {
            expect(fail({...item, durability: 50, enhancement: 14}))
            .toEqual({...item, durability: item.durability - 5, enhancement: 14})
        })
        it('subtract 10 if enhance > 14', () => {
            expect(fail({...item, durability: 50, enhancement: 15}))
            .toEqual({...item, durability: item.durability - 10, enhancement: 15})
        })
        it('enhance - 1 if enhance > 16', () => {
            expect(fail({...item, durability: 50, enhancement: 18}))
            .toBe({...item, durability: item.durability - 10, enhancement: --item.enhancement})
        })
    })
})


it.todo('fail')