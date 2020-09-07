import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '../../test/mock-http-client'

describe('RemoteAuthentication', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = 'url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sutRemoteAuthentication = new RemoteAuthentication(url, httpPostClientSpy)
    await sutRemoteAuthentication.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
