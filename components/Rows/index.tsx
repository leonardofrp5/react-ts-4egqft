import * as React from 'react';

import { StructureTable } from '../../Interfaces/interfaces';

interface Props {
  name: string;
  value: string | number;
  handleOnchage: any;
  index: string | number;
}

function Rows({ name, value, index, handleOnchage }: Props) {
  return (
    <th key={name}>
      <input name={name} value={value} onChange={handleOnchage(index)} />
    </th>
  );
}

export default Rows;
