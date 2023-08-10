import React from "react";

import { PowerButton, Logo, SocialIcons } from ".";

const Wrapper = ({ theme }) => (
  <>
    <PowerButton />
    <Logo theme={theme || ""} />
    <SocialIcons theme={theme || ""} />
  </>
);

export default Wrapper;
