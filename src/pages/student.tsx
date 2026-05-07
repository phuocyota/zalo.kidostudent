import React, { FC } from "react";
import { Page, useNavigate } from "zmp-ui";

const StudentPage: FC = () => {
  const navigate = useNavigate();

  return (
    <Page className="flex-1 flex flex-col bg-white p-0 relative">
      <iframe
        src="https://fe.kidostudent.kidoedu.vn/"
        className="flex-1 w-full border-0"
        title="Student"
      />
      {/* Floating Back Button */}
      <button
        onClick={() => navigate("/")}
        className="fixed bottom-6 left-6 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg z-50 transition-all duration-300"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M5 12l6-6M5 12l6 6" />
        </svg>
      </button>
    </Page>
  );
};

export default StudentPage;
