import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React, { useEffect, useState } from "react";
import { colors } from "@mui/material";
import Box from "@mui/material/Box";

import tabs from "./Components/tabs";
import FullWidthTab from "../TabBar/Components/FullWidthTab";
import a11yProps from "../TabBar/Components/a11yProps";

import api from "../../../../services/api";

export default function TabBar() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [emails, setEmails] = useState([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  async function fetchUnreadEmails() {
    try {
      console.log("Fetching unread emails...");
      const response = await api.get("/", {
        params: {
          read_state: false,
        },
      });
      console.log("Fetched emails:", response.data);
      setEmails(response.data);
    } catch (error) {
      console.log("Error fetching emails:", error);
    }
  }

  function filterInboxEmails(emails, entryBox: string) {
    return emails.filter((email) => email.entry_box === entryBox).length;
  }

  useEffect(() => {
    fetchUnreadEmails();
  }, []);

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%", height: "100%" }}>
      <AppBar
        position="static"
        sx={{ bgcolor: "white", boxShadow: "0", color: "black" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          sx={{ height: "60px" }}
          textColor="inherit"
          TabIndicatorProps={{
            style: {
              backgroundColor:
                value === 0 || value === 2
                  ? colors.blue[500]
                  : value === 1 || value === 4
                  ? colors.green[500]
                  : colors.orange[800],
            },
          }}
        >
          {tabs.map((tab) => (
            <Tab
              iconPosition="start"
              key={tab.index}
              label={
                <div className="flex capitalize space-x-7">
                  {tab.icon}
                  <div className="flex flex-col text-left">
                    <div className="flex">
                      <span className="font-bold">{tab.title}</span>
                      <div
                        style={{
                          background:
                            tab.index === 0 || tab.index === 2
                              ? colors.blue[500]
                              : tab.index === 1 || tab.index === 4
                              ? colors.green[500]
                              : colors.orange[800],
                        }}
                        className="mx-2 rounded-xl px-2 text-xs"
                      >
                        <span className="font-bold text-white lowercase">
                          {filterInboxEmails(emails, tab.title)} new
                        </span>
                      </div>
                    </div>
                    <span className="text-xs">Some {tab.title} emails</span>
                  </div>
                </div>
              }
              {...a11yProps(tab.index)}
            />
          ))}
        </Tabs>
      </AppBar>

      {tabs.map((tab) => (
        <FullWidthTab
          value={value}
          key={tab.index}
          index={tab.index}
          dir={theme.direction}
        >
          <span
            style={{
              background:
                tab.index === 0 || tab.index === 2
                  ? colors.blue[500]
                  : tab.index === 1 || tab.index === 4
                  ? colors.green[500]
                  : colors.orange[800],
            }}
            className="h-screen flex flex-col"
          >
            {tab.title} emails
          </span>
        </FullWidthTab>
      ))}
    </Box>
  );
}
