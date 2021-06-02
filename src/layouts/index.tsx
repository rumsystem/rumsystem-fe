import React from 'react';
import { observer } from 'mobx-react-lite';

import { Footer } from './footer';

import './index.sass';

interface Props {
  children?: React.ReactNode
}

const BasicLayout = observer((props: Props) => (
  <div className="layout-box flex-col">
    <div className="page-container-box flex-col flex-auto flex-1">
      {props.children}
    </div>

    <Footer />
  </div>
));

export default BasicLayout;
