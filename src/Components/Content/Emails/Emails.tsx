import React from 'react';
import Email from './Email/Email';
import { useEmails, EmailInterface } from '../../../hooks/useEmails';
import { useSelectedEmails } from './Email/InteractiveItens/SelectedEmailsContext';

const Emails = ({ entryBoxToFetch }) => {
  const emailsApi = "http://localhost:3000/emails";
  const emailEntryBox = entryBoxToFetch;
  const { emailList, entryBoxEmails } = useEmails(emailsApi, emailEntryBox);

  const { sortType } = useSelectedEmails();
  const sortEmailsByDate = (emails: EmailInterface[]) => {
    return emails.sort((a, b) => new Date(b.horary).getTime() - new Date(a.horary).getTime());
  };
  const sortEmailsByUser = (emails) => {
    return emails.sort((a, b) => a.user.localeCompare(b.user));
  };
  const sortedEmails = sortType === 'user'
  ? sortEmailsByUser(entryBoxEmails)
  : sortEmailsByDate(entryBoxEmails);

  const { setAllEmailIds } = useSelectedEmails();

  React.useEffect(() => {
    const emailIds = sortedEmails.map(email => email.id);
    setAllEmailIds(emailIds); 
  }, [sortedEmails, setAllEmailIds]);

  return (
      <div className="overflow-y-auto h-full font-inter w-full">
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
