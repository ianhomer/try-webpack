import { describe, it } from 'node:test'
import { strictEqual, match }  from 'node:assert'
const BASE_URL = 'http://localhost:8080'

// 
describe('web app', () => {
  it('should have content', async () => {
    const request = await fetch(`${BASE_URL}/`, {
      method: 'GET',
    })
    strictEqual(request.status, 200)
    const response = await request.text()
    console.log(response)
    match(response, /Title from webpack config/)
  })
});
