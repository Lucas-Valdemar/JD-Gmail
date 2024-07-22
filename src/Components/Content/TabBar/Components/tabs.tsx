import {
  InboxOutlined,
  SellOutlined,
  GroupOutlined,
  InfoOutlined,
  ForumOutlined,
} from "@mui/icons-material";
import React from "react";


  const tabs = [
    {
      title: "primary",
      icon: <InboxOutlined />,
      index: 0,
    },
    {
      title: "promotions",
      icon: <SellOutlined />,
      index: 1,
    },
    {
      title: "social",
      icon: <GroupOutlined />,
      index: 2,
    },
    {
      title: "updates",
      icon: <InfoOutlined />,
      index: 3,
    },
    {
      title: "forum",
      icon: <ForumOutlined />,
      index: 4,
    },
  ];

export default tabs;
