import * as React from 'react';

interface Props {
  index: number | string | any;
  children: JSX.Element;
}

function Columns({ index, children }: Props) {
  return <tr key={index}>{children}</tr>;
}

export default Columns;
