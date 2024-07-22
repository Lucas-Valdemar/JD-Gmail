import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SelectedEmailsContextProps {
  selectedEmails: number[];
  allEmailIds: number[]; 
  toggleEmailSelection: (id: number) => void;
  clearSelection: () => void;
  toggleAllEmailsSelection: (emails: number[]) => void;
  setAllEmailIds: (ids: number[]) => void; 
  sortType: 'date' | 'user';  // Adicione isto
  toggleSortType: () => void;  // Adicione isto
}

const SelectedEmailsContext = createContext<SelectedEmailsContextProps | undefined>(undefined);

export const SelectedEmailsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedEmails, setSelectedEmails] = useState<number[]>([]);
  const [allEmailIds, setAllEmailIds] = useState<number[]>([]); 
  const [sortType, setSortType] = useState<'date' | 'user'>('user');  // Adicione isto


  const toggleEmailSelection = (id: number) => {
    setSelectedEmails(prevSelectedEmails =>
      prevSelectedEmails.includes(id)
        ? prevSelectedEmails.filter(emailId => emailId !== id)
        : [...prevSelectedEmails, id]
    );
  };

  const clearSelection = () => {
    setSelectedEmails([]);
  };

  const toggleAllEmailsSelection = (emails: number[]) => {
    setSelectedEmails(prevSelectedEmails =>
      prevSelectedEmails.length === emails.length
        ? [] 
        : emails 
    );
  };

  const toggleSortType = () => {  // Adicione isto
    setSortType(prevSortType => (prevSortType === 'user' ? 'date' : 'user'));
  };


  return (
    <SelectedEmailsContext.Provider value={{ 
      selectedEmails, 
      allEmailIds, 
      toggleEmailSelection, 
      clearSelection, 
      toggleAllEmailsSelection,
      setAllEmailIds, 
      sortType, // Adicione isto
      toggleSortType // Adicione isto
    }}>
      {children}
    </SelectedEmailsContext.Provider>
  );
};

export const useSelectedEmails = () => {
  const context = useContext(SelectedEmailsContext);
  if (!context) {
    throw new Error('useSelectedEmails must be used within a SelectedEmailsProvider');
  }
  return context;
};
