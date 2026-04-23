import React, { FC } from "react";
import { Box, Header, Text } from "zmp-ui";
import kidoEduLogo from "static/kidoedu-logo.jpg";
import appConfig from "../../../app-config.json";

export const Welcome: FC = () => {
  return (
    <Header
      className="app-header no-border pl-4 flex-none pb-[6px]"
      showBackIcon={false}
      title={
        (
          <Box flex alignItems="center" className="space-x-2">
            <img
              className="w-8 h-8 rounded-lg"
              src={kidoEduLogo}
            />
            <Box>
              <Text.Title size="small">{appConfig.app.title}</Text.Title>
            </Box>
          </Box>
        ) as unknown as string
      }
    />
  );
};
