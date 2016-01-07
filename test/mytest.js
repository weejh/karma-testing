/* global  assert should describe it expect */

// var assert = require('assert')
//
// describe("A suite is just a function", function() {
//   var a
//
//   it("and so is a spec", function() {
//     a = true
//
//     expect(a).toBe(true)
//   })
// })
//
// var assert = require('assert')
// describe('Array', function () {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       assert.equal(-1, [1, 2, 3].indexOf(5))
//       assert.equal(-1, [1, 2, 3].indexOf(0))
//     })
//   })
// })
//

// var num = require('../js/one')
import num from '../js/one'
describe('Num', () => {
  it('should return 1', () => {
    assert.equal(num(), 1)
  })
})

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1, 2, 3].indexOf(5))
      assert.equal(-1, [1, 2, 3].indexOf(0))
    })
  })
})

describe('karma test with Chai', function () {
  it('should expose the Chai assert method', function () {
    assert.ok('everything', 'everything is ok')
  })

  it('should expose the Chai expect method', function () {
    expect('foo').to.not.equal('bar')
  })

  it('should expose the Chai should property', function () {
    (1).should.not.equal(2)
    should.exist(123)
  })
})
