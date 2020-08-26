interface HttpPostClient {
  post (url: string): Promise<void>
}

class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth (): Promise<void> {
    await this.httpPostClient.post(this.url)
  }
}

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
