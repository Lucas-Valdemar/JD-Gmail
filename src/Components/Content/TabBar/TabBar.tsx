import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import * as React from "react";
import { colors } from "@mui/material";
import Box from "@mui/material/Box";

import tabs from "./Components/tabs";
import FullWidthTab from "../TabBar/Components/FullWidthTab";
import a11yProps from "../TabBar/Components/a11yProps";
import Emails from "../Emails/Emails"

export default function TabBar() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
                value == 0 || value == 2
                  ? colors.blue[500]
                  : value == 1 || value == 4
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
                            tab.index == 0 || tab.index == 2
                              ? colors.blue[500]
                              : tab.index == 1 || tab.index == 4
                              ? colors.green[500]
                              : colors.orange[800],
                        }}
                        className=" mx-2 rounded-xl px-1 text-xs"
                      >
                        <span className="">1 new</span>
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

    <FullWidthTab value={value} key={0} index={0} dir={theme.direction}><Emails entryBoxToFetch={"primary"}/> </FullWidthTab>
    <FullWidthTab value={value} key={1} index={1} dir={theme.direction}><Emails entryBoxToFetch={"promotions"}/> </FullWidthTab>
    <FullWidthTab value={value} key={1} index={2} dir={theme.direction}><Emails entryBoxToFetch={"social"}/> </FullWidthTab>
    <FullWidthTab value={value} key={1} index={3} dir={theme.direction}><Emails entryBoxToFetch={"updates"}/> </FullWidthTab>
    <FullWidthTab value={value} key={1} index={4} dir={theme.direction}><Emails entryBoxToFetch={"forum"}/> </FullWidthTab>

    </Box>
  );
}
