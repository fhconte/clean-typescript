import axios from 'axios'
import faker from 'faker'

import { AxiosHttpClient } from './axios-http-client'
import { HttpPostParams } from '@/data/protocols/http/http-post-client'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => new AxiosHttpClient()

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const requestParams = mockPostRequest()
    const sut = makeSut()
    await sut.post(requestParams)
    expect(mockedAxios.post).toHaveBeenCalledWith(requestParams.url, requestParams.body)
  })
})
