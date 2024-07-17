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
      title: "Primary",
      icon: <InboxOutlined />,
      index: 0,
    },
    {
      title: "Promotions",
      icon: <SellOutlined />,
      index: 1,
    },
    {
      title: "Social",
      icon: <GroupOutlined />,
      index: 2,
    },
    {
      title: "Updates",
      icon: <InfoOutlined />,
      index: 3,
    },
    {
      title: "Forum",
      icon: <ForumOutlined />,
      index: 4,
    },
  ];

export default tabs;
