import React from "react";
import PFButton from "../../foundation/PFButton/PFButton";

export default {
  title: "Foundation/PFButton",
  component: PFButton,
};

export const DownloadResumeButton = () => {
  return (
    <PFButton
      variant = "solid"
      stylesProps={{
        width: "208px",
        height: "47px",
        borderRadius: "10px",
        // fontSize: "20px",
      }}
      OnClick={() => {}}
    >
      Download Resume
    </PFButton>
  );
};

//will change GhostButton to AboutMeButton
export const AboutMeButton = () => {
  return (
    <PFButton
      variant="outline"
      stylesProps={{
        fontSize: "16px",
        fontWeight: "400",
        borderColor:"#EF855B",
        
        
      }}
    >
      About me
    </PFButton>
  );
};

//will change GhostButton to AboutMeButton
export const SayHelloButton = () => {
    return (
      <PFButton
        variant="outline"
        stylesProps={{
          fontSize: "16px",
          fontWeight: "400",
          borderColor:"#EF855B",
          
          
        }}
      >
        Say Hello !
      </PFButton>
    );
  };