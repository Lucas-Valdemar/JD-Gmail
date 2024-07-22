import { useState, useEffect } from "react";
export interface EmailInterface {
    id: number,
    user: string | null,
    subject: string | null,
    content: string | null,
    tag: string | null,
    favorite: boolean | null,
    read_state: boolean | null,
    horary: string,
    entry_box: string | null
}

export const useEmails = (emailsApi:string, emailEntryBox:string) => {
    const [emailList, setEmailList] = useState<EmailInterface[]>([])
    const [entryBoxEmails, setEntryBoxEmails] = useState<EmailInterface[]>([])

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(emailsApi);
        const data: EmailInterface[] = await response.json();
        setEmailList(data);

        const filteredEmails = data.filter(
            (email) => email.entry_box === emailEntryBox
        );
         setEntryBoxEmails(filteredEmails)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [emailsApi, emailEntryBox]);
  return {emailList, entryBoxEmails};
}

  
