import { memo, ReactElement } from "react";

function Button(): ReactElement {
  return <button>mantap!</button>;
}

export default memo(Button);
