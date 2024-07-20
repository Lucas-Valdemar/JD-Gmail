import React from 'react';
import Email from './Email/Email';
import { useEmails, EmailInterface } from '../../../hooks/useEmails';

const Emails = ({ entryBoxToFetch }) => {
  const emailsApi = "http://localhost:3000/emails";
  const emailEntryBox = entryBoxToFetch;
  const { emailList, entryBoxEmails } = useEmails(emailsApi, emailEntryBox);

  
  const sortEmailsByDate = (emails: EmailInterface[]) => {
    return emails.sort((a, b) => new Date(b.horary).getTime() - new Date(a.horary).getTime());
  };

  const sortEmailsByUser = (emails: EmailInterface[]) => {
    return emails.sort((a, b) => (a.user ?? "").localeCompare(b.user ?? ""));
  };

 
  const sortedEmails = sortEmailsByDate(entryBoxEmails);

  return (
    <div className="overflow-y-auto h-[50vh]">
      {sortedEmails.map((email: EmailInterface) => (
        <Email
          key={email.id}
          id={email.id}
          user={email.user}
          subject={email.subject}
          content={email.content}
          tag={email.tag}
          favorite={email.favorite}
          read_state={email.read_state}
          horary={email.horary}
          entry_box={email.entry_box}
        />
      ))}
    </div>
  );
};

export default Emails;