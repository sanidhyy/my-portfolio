import React from "react";

import { PowerButton, Logo, SocialIcons } from ".";

// Wrapper
const Wrapper = ({ theme }) => (
  <>
    {/* Power Button */}
    <PowerButton />

    {/* Brand Logo */}
    <Logo theme={theme || ""} />

    {/* Social Icons */}
    <SocialIcons theme={theme || ""} />
  </>
);

export default Wrapper;
