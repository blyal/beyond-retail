import React from "react";

interface ShareIconButtonProps {
  icon: React.ReactNode;
  link: string;
}

const ShareIconButton: React.FC<ShareIconButtonProps> = ({ icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      {icon}
    </a>
  );
};

export default ShareIconButton;
