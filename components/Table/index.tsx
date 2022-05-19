import * as React from 'react';

import Rows from '../Rows';
import Columns from '../Columns';
import { StructureTable } from '../../Interfaces/interfaces';

interface Props {
  table: StructureTable[];
  handleOnchage: any;
}

function Table({ table, handleOnchage }: Props) {
  return (
    <table>
      {table.map((value, index) => (
        <Columns index={value}>
          {value.map(({ name, value }: StructureTable) => (
            <Rows
              name={name}
              value={value}
              index={index}
              handleOnchage={handleOnchage}
            />
          ))}
        </Columns>
      ))}
    </table>
  );
}

export default Table;
