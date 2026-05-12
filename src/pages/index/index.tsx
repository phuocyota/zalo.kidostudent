import React from "react";
import { Box, Icon, Page, Text, useNavigate } from "zmp-ui";
import { Welcome } from "./welcome";

const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const optionCardClass =
    "h-64 rounded-2xl text-white shadow-lg transition-all duration-300 transform active:scale-[0.98] flex flex-col items-center justify-center gap-3 cursor-pointer";
  const optionIconClass =
    "block flex-none !w-[72px] !h-[72px] !text-[72px] leading-none";

  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <Welcome />
      <Box className="flex-1 overflow-auto flex flex-col items-center justify-center">
        <Box className="w-full max-w-sm px-6 flex flex-col gap-6">
          <Box
            role="button"
            tabIndex={0}
            onClick={() => navigate("/student")}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                navigate("/student");
              }
            }}
            className={`${optionCardClass} bg-gradient-to-br from-indigo-500 to-purple-600`}
          >
            <Icon icon="zi-user-solid" className={optionIconClass} />
            <Text.Title className="text-white text-center leading-tight" size="large">
              Học sinh
            </Text.Title>
          </Box>

          <Box
            role="button"
            tabIndex={0}
            onClick={() => navigate("/parent")}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                navigate("/parent");
              }
            }}
            className={`${optionCardClass} bg-gradient-to-br from-pink-500 to-rose-600`}
          >
            <Icon icon="zi-user-circle-solid" className={optionIconClass} />
            <Text.Title className="text-white text-center leading-tight" size="large">
              Phụ huynh
            </Text.Title>
          </Box>
        </Box>
      </Box>
    </Page>
  );
};

export default HomePage;
