import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SelectedEmailsContextProps {
  selectedEmails: number[];
  allEmailIds: number[]; 
  toggleEmailSelection: (id: number) => void;
  clearSelection: () => void;
  toggleAllEmailsSelection: (emails: number[]) => void;
  setAllEmailIds: (ids: number[]) => void; 
  sortType: 'date' | 'user' | 'read';  
  setSortType: (type: 'date' | 'user' | 'read') => void;
  toggleSortType: () => void;  
}

const SelectedEmailsContext = createContext<SelectedEmailsContextProps | undefined>(undefined);

export const SelectedEmailsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedEmails, setSelectedEmails] = useState<number[]>([]);
  const [allEmailIds, setAllEmailIds] = useState<number[]>([]);
  const [sortType, setSortType] = useState<'date' | 'user' | 'read'>('date'); 


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

  const toggleSortType = () => {
    setSortType(prevSortType => (prevSortType === 'user' ? 'date' : prevSortType === 'date' ? 'read' : 'user'));
  };


  return (
    <SelectedEmailsContext.Provider value={{ 
      selectedEmails, 
      allEmailIds, 
      toggleEmailSelection, 
      clearSelection, 
      toggleAllEmailsSelection,
      setAllEmailIds, 
      sortType, 
      setSortType,
      toggleSortType 
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
