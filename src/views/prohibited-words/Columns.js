/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export const getColumnMobile = (handlerShowModal) => [
  {
    accessor: 'id',
  },
  {
    Header: 'NO',
    accessor: 'number',
    sortable: false,
    headerClassName: 'text-medium text-muted text-uppercase px-2',
    Cell: ({ cell }) => (
      <div className="text-medium font-weight-bold px-2" style={{ width: '0.5rem' }}>
        {cell.value || '-'}
      </div>
    ),
  },
  {
    Header: 'Prohibited words',
    accessor: 'word',
    sortable: false,
    headerClassName: 'text-medium text-muted text-uppercase',
    Cell: ({ cell }) => <div className="text-medium font-weight-bold">{cell.value || '-'}</div>,
  },
  {
    Header: 'Correction',
    accessor: 'correction',
    sortable: false,
    headerClassName: 'text-medium text-muted text-uppercase',
    Cell: ({ cell }) => <div className="text-medium">{cell.value || '-'}</div>,
  },
  {
    Header: 'ACTIONS',
    accessor: 'action',
    sortable: false,
    headerClassName: 'text-medium text-muted text-end text-uppercase px-3',
    Cell: () => (
      <div className="text-medium float-end " style={{ width: '85px' }}>
        <a
          className="mx-2 hover-a-edit"
          style={{ fontWeight: '400', fontSize: '12px', lineHeight: '15.11px' }}
          href="#"
          onClick={() => handlerShowModal('edit')}
        >
          Edit
        </a>
        <a
          href="#"
          style={{ fontWeight: '400', fontSize: '12px', lineHeight: '15.11px' }}
          className=" hover-a-delete"
          onClick={() => handlerShowModal('delete')}
        >
          Delete
        </a>
      </div>
    ),
  },
];

export const getColumnDesktop = (handlerShowModal) => [
  {
    accessor: 'id',
  },
  {
    Header: 'NO',
    accessor: 'number',
    sortable: false,
    headerClassName: 'text-medium text-muted',
    Cell: ({ cell }) => (
      <div className="text-medium font-weight-bold" style={{ width: '2rem' }}>
        {cell.value || '-'}
      </div>
    ),
  },
  {
    Header: 'Prohibited words',
    accessor: 'word',
    sortable: false,
    headerClassName: 'text-medium text-muted',
    Cell: ({ cell }) => (
      <div className="text-medium font-weight-bold" style={{ width: '8rem' }}>
        {cell.value || '-'}
      </div>
    ),
  },
  {
    Header: 'Correction',
    accessor: 'correction',
    sortable: false,
    headerClassName: 'text-medium text-muted',
    Cell: ({ cell }) => (
      <div className="text-medium" style={{ width: '7rem' }}>
        {cell.value || '-'}
      </div>
    ),
  },
  {
    Header: 'ACTIONS',
    accessor: 'action',
    sortable: false,
    headerClassName: 'text-medium text-muted text-end',
    Cell: () => (
      <div className="text-medium float-end " style={{ width: '5rem' }}>
        <a className="mx-2 hover-a-edit" href="#" onClick={() => handlerShowModal('edit')}>
          Edit
        </a>
        <a href="#" className=" hover-a-delete" onClick={() => handlerShowModal('delete')}>
          Delete
        </a>
      </div>
    ),
  },
];
