// app/context/ComparisonContext.tsx
"use client";

import { createContext, useState, useContext, ReactNode } from 'react';
import { Product } from '@/app/data/catalogue-data'; // Sesuaikan path jika perlu

type ComparisonContextType = {
  items: Product[];
  addToCompare: (product: Product) => void;
  removeFromCompare: (productId: string) => void;
  clearCompare: () => void;
};

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export function ComparisonProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);

  const addToCompare = (product: Product) => {
    setItems(prevItems => {
      // Cegah duplikat dan batasi maksimal 4 item
      if (prevItems.some(item => item.id === product.id) || prevItems.length >= 4) {
        return prevItems;
      }
      return [...prevItems, product];
    });
  };

  const removeFromCompare = (productId: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const clearCompare = () => {
    setItems([]);
  };

  return (
    <ComparisonContext.Provider value={{ items, addToCompare, removeFromCompare, clearCompare }}>
      {children}
    </ComparisonContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(ComparisonContext);
  if (context === undefined) {
    throw new Error('useCompare must be used within a ComparisonProvider');
  }
  return context;
}