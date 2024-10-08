/* eslint-disable react-hooks/rules-of-hooks */
import classNames from 'classnames';
import { useIsMobile } from 'hooks/useIsMobile';
import React, { useCallback } from 'react';
import { Table as TableRes } from 'react-bootstrap';

const Table = ({ tableInstance, className = 'react-table boxed', rowProps, customStyle, rowStyle }) => {
  const { getTableProps, headerGroups, page, getTableBodyProps, prepareRow, toggleAllPageRowsSelected, setIsOpenAddEditModal } = tableInstance;

  const handleRowClick = useCallback((oc, itemD, group) => (e) => oc?.(e, itemD, group), []);
  return (
    <>
      <TableRes responsive hover className={className} {...getTableProps()} style={customStyle} striped={useIsMobile()}>
        <thead>
          {headerGroups.map((headerGroup, headerIndex) => (
            <tr key={`header${headerIndex}`} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => {
                return (
                  <th
                    key={`th.${index}`}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={`${classNames(column.headerClassName, {
                      sorting_desc: column.isSortedDesc,
                      sorting_asc: column.isSorted && !column.isSortedDesc,
                      sorting: column.sortable,
                    })} ${useIsMobile() && 'px-0'}`}
                  >
                    {column.render('Header')}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="border-spacing-none">
          {page.map((row, i) => {
            prepareRow(row);
            const newRowProps = row.getRowProps(rowProps);
            return (
              <tr
                key={`tr.${i}`}
                {...row.getRowProps()}
                {...newRowProps}
                onClick={handleRowClick(newRowProps.onClick, row?.original, row?.original?.id)}
                className={`${classNames({ selected: row.isSelected })} `}
                style={{ cursor: 'pointer', boxShadow: 'none' }}
              >
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={`td.${cellIndex}`}
                    {...cell.getCellProps()}
                    onClick={() => {
                      if (!row.toggleRowSelected) return;

                      if (cell.column.id === 'name') {
                        toggleAllPageRowsSelected(false);
                        row.toggleRowSelected();
                        setIsOpenAddEditModal(true);
                      } else {
                        row.toggleRowSelected();
                      }
                    }}
                    style={(`${rowStyle}`, { borderRadius: '0px', verticalAlign: 'middle' })}
                    className={`${useIsMobile() && 'px-0'} border-bottom`}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </TableRes>
    </>
  );
};
export default Table;
