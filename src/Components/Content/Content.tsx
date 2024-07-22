import React from "react";
import TabBar from "./TabBar/TabBar";
import ActionBar from "./ActionBar/ActionBar";
import { SelectedEmailsProvider} from './Emails/Email/InteractiveItens/SelectedEmailsContext';


function Content() {
  return (<>
    <SelectedEmailsProvider>
    <ActionBar/>
    <TabBar />
    </SelectedEmailsProvider>
    </>
  )
  

}

export default Content;