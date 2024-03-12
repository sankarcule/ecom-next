import { render, screen, act } from '@testing-library/react';

import Cart from '../app/cart/page';
import { type StateCreator, create } from 'zustand'

export type CounterStore = {
  count: number
  inc: () => void
}

export const counterStoreCreator: StateCreator<CounterStore> = (set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
})

export const useCounterStore = create<CounterStore>()(counterStoreCreator)

describe('Cart', () => {
  it('should render no order items', () => {
    render(<Cart />);

    expect(screen.getByText(/No Items added to the cart/i)).toBeInTheDocument();
  });

//   it('should render a list of order items', () => {

//     render(<Cart />);

//     const link = screen.getByRole('link');
//     expect(link).toBeInTheDocument();
//     expect(link).toHaveAttribute('href', `/proudcts/1`);
//   });
})