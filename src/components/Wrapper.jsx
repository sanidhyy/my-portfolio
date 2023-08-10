import React from "react";

import { PowerButton, Logo, SocialIcons } from ".";

// Wrapper
const Wrapper = ({ theme }) => (
  <aside>
    {/* Power Button */}
    <PowerButton />

    {/* Brand Logo */}
    <Logo theme={theme || ""} />

    {/* Social Icons */}
    <SocialIcons theme={theme || ""} />
  </aside>
);

export default Wrapper;
