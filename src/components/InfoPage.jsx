import React from "react";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";

const InfoPage = () => {
  return (
    <div className="homepage-container">
      <h1 className="heading"> Welcome to NotoSphere</h1>
      <div className="home-content">
        <p className="sub">
          A notes app is a digital tool designed to help users capture,
          organize, and manage information in a convenient and efficient manner.
          It serves as a virtual notepad, allowing individuals to jot down
          thoughts, ideas, reminders, and other pieces of information quickly
          and easily. With the advent of technology, notes apps have become
          increasingly popular due to their versatility and the ability to
          synchronize data across devices.
        </p>
        <h4 className="subhead"> Key Features</h4>
        <ul>
          <li> Organization and Categorization</li>
          <li>Search Functionality</li>
          <li>Login </li>
          <li>Change theme Functionality</li>
        </ul>
        <h4 className="subhead"> Use Cases</h4>
        <ul>
          <li> Personal Organization</li>
          <li>Professional Productivity</li>
          <li> Creative Expression </li>
          <li> Research and Reference</li>
        </ul>

        <div className="add">
          <Link href="/addnote" color="inherit">
            <Tooltip title="Add Note">
              <IconButton variant="contained">
                <AddIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Tooltip>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
