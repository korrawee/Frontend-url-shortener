import React from 'react';

export const BigText: React.FC<any> = (props) => {
  return <div className="text-5xl font-extrabold drop-shadow-2xl shadow-slate-700 text-center text-indigo-600">{props.children}</div>;
};

export const Description: React.FC<any> = (props) => {
  return (
      <div className="text-xl mx-auto mt-4 text-center  text-indigo-500 max-w-xl">
          {props.children}
      </div>
  );
}
