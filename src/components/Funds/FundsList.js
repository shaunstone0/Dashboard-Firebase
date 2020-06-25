import React, { useMemo } from 'react';
import { useTable, usePagination, useFilters } from 'react-table';
import './Funds.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from './SearchFunds';

const FundsList = ({ funds, allFunds }) => {
  let data = allFunds;

  const columns = useMemo(
    () => [
      {
        Header: 'Fund Name',
        accessor: 'fund_name',
      },
      {
        Header: 'Fund Id',
        accessor: 'fund_id',
      },
      {
        Header: 'Subfund Name',
        accessor: 'subfund_name',
      },
      {
        Header: 'Subfund Id',
        accessor: 'subfund_id',
      },
      {
        Header: 'Share Class Name',
        accessor: 'share_class_name',
      },
      {
        Header: 'Share Class Id',
        accessor: 'share_class_id',
      },
      {
        Header: 'Date of Report',
        accessor: 'date',
      },
      {
        Header: 'Report Status',
        accessor: 'report_status',
      },
      {
        Header: 'Alerts',
        accessor: 'nb_alerts',
      },
    ],
    []
  );

  // Get Tables Props
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    setFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    usePagination
  );

  return (
    <div>
      <div className='flex align-center top-pagination'>
        <Search useFilters={useFilters} setFilter={setFilter} />
        <div className='page-input bold'>
          Page:{' '}
          <input
            type='number'
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
          />
        </div>
        <div className='entries-input bold'>
          Entries:{' '}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}>
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
      <table {...getTableProps()} className='funds-table'>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='pageinfo-container flex justify-center'>
        <span className='page'>
          <strong>
            Page {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
      </div>
      <div className='pagination flex justify-right align-center'>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'First Page'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          <FontAwesomeIcon icon='step-backward' />
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          <FontAwesomeIcon icon='step-forward' />
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'Last Page'}
        </button>{' '}
      </div>
    </div>
  );
};

export default FundsList;
