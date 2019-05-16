const assert = require('assert');
const basicAuth = require('./')
describe('test' , () => {
  it('should parse correctly', () => {
    const ctx = {
      headers: {
        'authorization': 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
      }
    }
    basicAuth(ctx, async () => {})
    const { name, pass } = ctx.basicAuth
    assert( name === 'username' )
    assert( pass === 'password' )
  })
  it('should get undefined', () => {
    const ctx = {
      headers: {
      }
    }
    basicAuth(ctx, async () => {})
    assert( ctx.basicAuth === undefined )
  })
})
