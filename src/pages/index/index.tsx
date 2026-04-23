import React from "react";
import { Box, Page, Button } from "zmp-ui";
import { Welcome } from "./welcome";
import studentIcon from "static/student-icon.svg";
import parentIcon from "static/parent-icon.svg";

const HomePage: React.FunctionComponent = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <Welcome />
      <Box className="flex-1 overflow-auto flex flex-col items-center justify-center">
        <Box className="w-full max-w-sm px-6 flex flex-col gap-6">
          {/* Student Button */}
          <Button
            onClick={() => {
              window.location.href = "/student";
            }}
            className="h-64 flex flex-col items-center justify-center gap-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <img 
              src={studentIcon} 
              alt="Student" 
              className="w-24 h-24 filter drop-shadow-lg"
            />
            <span className="text-2xl font-bold">Học Sinh</span>
          </Button>

          {/* Parent Button */}
          <Button
            onClick={() => {
              window.location.href = "/parent";
            }}
            className="h-64 flex flex-col items-center justify-center gap-4 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <img 
              src={parentIcon} 
              alt="Parent" 
              className="w-24 h-24 filter drop-shadow-lg"
            />
            <span className="text-2xl font-bold">Phụ Huynh</span>
          </Button>
        </Box>
      </Box>
    </Page>
  );
};

export default HomePage;
