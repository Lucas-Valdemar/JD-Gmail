import React from "react";
import Emails from "./Emails/Emails";
import ActionBar from "./ActionBar/ActionBar";


function Content() {
  return (
    <div className="flex flex-col w-full">
    <ActionBar/>
    <Emails/>
    </div>
  )
  

}

export default Content;