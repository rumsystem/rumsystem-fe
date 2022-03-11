import React from 'react';
import { observer } from 'mobx-react-lite';

import { Footer } from './footer';

interface Props {
  children?: React.ReactNode
}

const BasicLayout = observer((props: Props) => (
  <div className="layout-box flex-col min-h-[100vh]">
    <div className="page-container-box flex-col flex-auto flex-1">
      {props.children}
    </div>

    <Footer />
  </div>
));

export default BasicLayout;
