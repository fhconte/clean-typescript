import axios from 'axios'

import { mockPostRequest } from '@/data/test'
import { AxiosHttpClient } from './axios-http-client'
import { mockAxios } from '@/infra/test'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios
  }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const requestParams = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.post(requestParams)
    expect(mockedAxios.post).toHaveBeenCalledWith(requestParams.url, requestParams.body)
  })

  test('Should return with correct response (statusCode and body)', async () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(mockPostRequest())
    await expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
