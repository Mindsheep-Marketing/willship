const RenderTable = ({table} : {table: {columnHeading: string; rowData: string[]}[]}) => {

  const tableHeadings = table.map(column => (
    column.columnHeading
  ));

  let rows : string[][]= [];

  table.forEach((column, i) => {
    column.rowData.forEach((row, j) => {
      if (!rows[j]) {
        rows[j] = [];
      };
      rows[j][i] = row;
    });
  });

  return (
    <div className="w-full overflow-x-scroll">
      <table className="w-full border border-b-divideBorder">
        <tbody className="divide-y divide-divideBorder">
          <tr className="bg-darkBlue text-white font-medium">
            {tableHeadings.map((heading, i) => (
              <th key={i} className='py-2'>{heading}</th>
            ))}
          </tr>
          {rows.map((row, x) => (
            <tr key={x} className={`${x % 2 === 0 ? 'bg-white' : 'bg-nearlyWhite'} divide-x divide-divideBorder`}>
              {row.map((item, y) => (
                <td className="text-center py-2 min-w-roro" key={y}>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

};

export default RenderTable;