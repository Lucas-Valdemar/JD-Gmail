import * as React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


interface FullWidthTabProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

export default function FullWidthTab(props: FullWidthTabProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className="h-[79vh]">
          {children}
        </div>
      )}
    </div>
  );
}


