import { AnyCnameRecord } from 'dns';
import React from 'react';

const MainContainer: React.FunctionComponent<any> = (props) => {

  return (
      <div className='flex flex-col overflow-hidden' {...props}>
        {props.children}
      </div>
  );
};

export default MainContainer;
