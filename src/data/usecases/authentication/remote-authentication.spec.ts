import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClient } from 'data/protocols/http/http-post-client'

describe('RemoteAuthentication', () => {
  test('Should call HttpClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string
      async post (url: string): Promise<void> {
        this.url = url
        return await Promise.resolve()
      }
    }

    const url = 'url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sutRemoteAuthentication = new RemoteAuthentication(url, httpPostClientSpy)
    await sutRemoteAuthentication.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
