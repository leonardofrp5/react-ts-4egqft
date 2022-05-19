import * as React from 'react';
import { useState } from 'react';

import Table from './components/Table';
import { StructureTable } from './Interfaces/interfaces';
import './style.css';

function App() {
  const [count, setCount] = useState<number | string>(0);
  // const [table, setTable] = useState<StructureTable[]>([]);
  const [table, setTable] = useState([]);

  const toggleCountTable = (e: { target: HTMLInputElement }) => {
    const number = e.target.value;
    setCount(() => number);
  };

  const submitCreateTable = (e: any) => {
    e.preventDefault();
    const tableWithRowCol = [];

    for (let itemCol = 0; itemCol < count; itemCol++) {
      const columns = [];
      for (let itemRow = 0; itemRow < count; itemRow++) {
        columns.push({
          key: `row-${itemCol}-${itemRow}`,
          name: `row-${itemCol}-${itemRow}`,
          value: '',
        });
      }
      tableWithRowCol.push(columns);
    }

    setTable(tableWithRowCol);
  };

  const handleOnchage = (key: string | number) => (e: any) => {
    const { name, value } = e.target;
    const prev = [...table];
    if (!prev[key]) return prev;

    prev[key] = prev[key].map((input: StructureTable) =>
      input.name === name ? { ...input, value } : input
    );

    setTable(prev);
  };

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const getComparator =
    (orderBy, order = 'asc') =>
    () => {
      console.log(order);
      console.log(orderBy);
      return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
    };

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  console.log(descendingComparator);

  return (
    <div>
      <h1>Dojo Grid</h1>
      <p>
        Please if you want to create table, add number of columns and rows you
        want
      </p>
      <form onSubmit={submitCreateTable}>
        <input
          name="number"
          placeholder="add number"
          type="number"
          onChange={toggleCountTable}
        />
        <button type="submit">Create Table</button>
      </form>
      <table>
        <thead>
          <tr>
            {table.map((value, index) => (
              <th key={index}>
                <button onClick={getComparator(index)}>{index}</button>
              </th>
            ))}
          </tr>
        </thead>
        {table.map((value, index) => (
          <tbody>
            <tr key={index}>
              {value.map(({ name, value }: StructureTable) => (
                <td key={name}>
                  <input
                    name={name}
                    value={value}
                    onChange={handleOnchage(index)}
                  />
                </td>
              ))}
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default App;

// {table.map((value, index) => (
//   <tr key={index}>
//     {value.map(({ name, value }: StructureTable) => (
//       <th key={name}>
//         <input
//           name={name}
//           value={value}
//           onChange={handleOnchage(index)}
//           onClick={descendingComparator}
//         />
//       </th>
//     ))}
//   </tr>
// ))}

{
  /* <Table table={table} handleOnchage={handleOnchage} /> */
}
