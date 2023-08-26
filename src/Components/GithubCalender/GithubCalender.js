import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function GithubCalender() {
  return (
    <>
      <Typography
        className="contactheading"
        sx={{
          textAlign: "center",
          fontWeight: "600",
          color: "rgb(204,214,246)",
          marginBottom: "2%",
        }}
        variant="h2"
      >
        My Contributions
      </Typography>
      <Box
        sx={{
          textAlign: "center",
          width: "fit-content",
          margin: "auto auto 10% auto",
          color: "white",
          borderRadius: "8px",
          padding: "3% 1%",
          border: "2px solid white",
        }}
      >
        <GitHubCalendar
          className="react-activity-calendar"
          color="skyblue"
          username="thisiskmv"
        />
      </Box>

      <Box
        sx={{
          textAlign: "left",
          width: "fit-content",
          margin: "auto",
          color: "white",
          borderRadius: "8px",
          padding: "3% 1%",
        }}
      >
        <Box>
          <img
            id="github-top-langs"
            width="100%"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=thisiskmv&theme=transparent&hide_border=true&show_icons=true&locale=en&layout=compact&title_color=white&text_color=white"
          />
        </Box>
        <Box>
          <img
            id="github-stats-card"
            width="100%"
            src="https://github-readme-stats.vercel.app/api?username=thisiskmv&theme=transparent&hide_border=true&show_icons=true&locale=en&title_color=white&text_color=white"
          />
        </Box>
        <Box>
          <img
            id="github-streak-stats"
            width="100%"
            src="https://github-readme-streak-stats.herokuapp.com/?user=thisiskmv&theme=transparent&hide_border=true&title_color=white&text_color=white&sideNums=white&sideLabels=white&ring=white&fire=white&currStreakLabel=white&currStreakNum=white"
            alt=""
          />
        </Box>
      </Box>
    </>
  );
}
