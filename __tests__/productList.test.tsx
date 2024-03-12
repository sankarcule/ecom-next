import '@testing-library/jest-dom'
import { renderHook, waitFor } from "@testing-library/react";
import {useQuery,QueryCache, QueryClient, UseQueryResult } from "@tanstack/react-query"
import nock from 'nock';
import Products from '../app/products/page';
import { renderWithClient } from './utils'

describe('Product List', () => {
  const queryCache = new QueryCache()
  const queryClient = new QueryClient({ queryCache })

  it('should call onSuccess after a query has been fetched', async () => {
    const key = queryKey()
    const states: UseQueryResult<any>[] = []
    const onSuccess = jest.fn()

    renderWithClient(queryClient, <Products />)

    await sleep(10)
    expect(states.length).toBe(2)
    expect(onSuccess).toHaveBeenCalledTimes(1)
    expect(onSuccess).toHaveBeenCalledWith('data')
  })

  // it('renders product list', async () => {    
  //   const expectation = nock('https://dummyjson.com').get('/products?skip=0&limit=10').reply(200, {
  //     answer: 42,
  //   })
    
  //   function useCustomHook() {
  //     return useQuery({ queryKey: ['customHook'], queryFn: () => 'Hello' })
  //   }

  //   const queryClient = new QueryClient()
  //   const wrapper = ({ children }) => (
  //     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  //   )
    
  //   const result = await renderHook(() => useCustomHook(), { wrapper })
    
  //   expect(result.current.data).toEqual({ answer: 42 })

  // })
})