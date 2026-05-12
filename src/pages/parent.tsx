import React, { FC } from "react";
import { Box, Page, useNavigate } from "zmp-ui";

const ParentPage: FC = () => {
  const navigate = useNavigate();

  return (
    <Page className="flex-1 bg-white p-0 relative overflow-hidden">
      <iframe
        src="https://fe.parent.kidocanteen.kidoedu.vn/"
        className="absolute inset-0 h-full w-full border-0"
        title="Parent"
      />
      <div
        className="fixed bottom-6 left-6 pointer-events-none"
        style={{ zIndex: 2147483647 }}
      >
        <Box
          role="button"
          tabIndex={0}
          onClick={() => navigate("/")}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              navigate("/");
            }
          }}
          className="pointer-events-auto relative w-12 h-12 rounded-full shadow-lg bg-primary text-white active:scale-95"
          aria-label="Quay lại"
        >
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 block h-6 w-6 -translate-x-1/2 -translate-y-1/2"
          >
            <span className="absolute left-[5px] top-[11px] h-0.5 w-3.5 bg-white" />
            <span className="absolute left-[5px] top-[7px] h-2.5 w-2.5 rotate-45 border-b-2 border-l-2 border-white" />
          </span>
        </Box>
      </div>
    </Page>
  );
};

export default ParentPage;
