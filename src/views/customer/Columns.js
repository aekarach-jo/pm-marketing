/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Button, Col } from 'react-bootstrap';

export const getColumnMobile = (handlerShowModal) => [
  {
    accessor: 'id',
  },
  {
    Header: 'Member Name',
    accessor: 'name',
    sortable: false,
    headerClassName: 'text-medium text-muted px-2',
    Cell: ({ cell }) => (
      <div className="text-medium d-flex flex-row gap-0 ps-1" style={{ width: '12rem' }}>
        <img className="rounded-md" src={cell.row.original.thum} alt="thum" style={{ width: '35px', height: '35px', marginRight: '10px' }} />
        <Col className="w-auto">
          <p className="m-0 font-weight-bold fs-6" style={{ fontWeight: '600', fontSize: '14px', lineHeight: '21.11px' }}>
            {cell.value}
          </p>
          <p className="m-0" style={{ fontWeight: '400', fontSize: '10px', lineHeight: '15.11px', color: 'rgba(131, 146, 171, 1)' }}>
            {cell.row.original.email}
          </p>
        </Col>
      </div>
    ),
  },
  {
    Header: 'ROLE',
    accessor: 'role',
    sortable: false,
    headerClassName: 'text-medium text-muted px-1',
    Cell: ({ cell }) => (
      <div className="text-medium" style={{ width: '2rem' }}>
        {cell.value ? (
          <Button
            className="text-center rounded-sm p-0"
            style={{ width: '55px', height: '20px', background: 'linear-gradient(135deg, #98EC2D 0%, #17AD37 100%)' }}
          >
            <div style={{ fontSize: '8px', fontWeight: '700', lineHeight: '12.13px' }}>ADMIN</div>
          </Button>
        ) : (
          <Button
            className="text-center rounded-sm p-0"
            style={{ width: '55px', height: '20px', background: 'linear-gradient(135deg, #FF00E6 0%, #99008A 100%)' }}
          >
            <div style={{ fontSize: '8px', fontWeight: '700', lineHeight: '12.13px' }}>MEMBER</div>
          </Button>
        )}
      </div>
    ),
  },
  {
    Header: 'ACTIONS',
    accessor: 'action',
    sortable: false,
    headerClassName: 'text-medium text-muted text-end px-3',
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
    Header: 'Member Name',
    accessor: 'name',
    sortable: false,
    headerClassName: 'text-medium text-muted',
    Cell: ({ cell }) => (
      <div className="text-medium d-flex flex-row" style={{ width: '13rem' }}>
        <img className="rounded-md" src={cell.row.original.thum} alt="thum" style={{ width: '40px', height: '40px', marginRight: '19px' }} />
        <Col>
          <p className="m-0 font-weight-bold fs-6">{cell.value}</p>
          <p className="m-0">{cell.row.original.email}</p>
        </Col>
      </div>
    ),
  },
  {
    Header: 'ID / Pass',
    accessor: 'pass',
    sortable: false,
    headerClassName: 'text-medium text-muted',
    Cell: ({ cell }) => (
      <div className="text-medium text-start" style={{ width: '7rem' }}>
        <Col>
          <p className="m-0 font-weight-bold fs-6">{cell.row.original.country}</p>
          <p className="m-0">{cell.row.original.pass}</p>
        </Col>
      </div>
    ),
  },
  {
    Header: 'ROLE',
    accessor: 'role',
    sortable: false,
    headerClassName: 'text-medium text-muted',
    Cell: ({ cell }) => (
      <div className="text-medium" style={{ width: '7rem' }}>
        {cell.value ? (
          <Button className="text-center p-0" style={{ width: '68px', height: '25px', background: 'linear-gradient(135deg, #98EC2D 0%, #17AD37 100%)' }}>
            <div style={{ fontSize: '12px', fontWeight: '700', lineHeight: '18.13px' }}>ADMIN</div>
          </Button>
        ) : (
          <Button className="text-center p-0" style={{ width: '68px', height: '25px', background: 'linear-gradient(135deg, #FF00E6 0%, #99008A 100%)' }}>
            <div style={{ fontSize: '12px', fontWeight: '700', lineHeight: '18.13px' }}>MEMBER</div>
          </Button>
        )}
      </div>
    ),
  },
  {
    Header: 'STATUS',
    accessor: 'status',
    sortable: false,
    headerClassName: 'text-medium text-muted',
    Cell: ({ cell }) => (
      <div className="text-medium" style={{ width: '7rem' }}>
        {cell.value ? (
          <Button className="text-center p-0" style={{ width: '68px', height: '25px', background: 'linear-gradient(135deg, #98EC2D 0%, #17AD37 100%)' }}>
            <div style={{ fontSize: '12px', fontWeight: '700', lineHeight: '18.13px' }}>ONLINE</div>
          </Button>
        ) : (
          <Button
            className="text-center p-0"
            style={{ width: '68px', height: '25px', background: 'linear-gradient(135deg, #EC722D 0%, #EC2D2D 100%, #CF1010 100%)' }}
          >
            <div style={{ fontSize: '12px', fontWeight: '700', lineHeight: '18.13px' }}>OFFLINE</div>
          </Button>
        )}
      </div>
    ),
  },
  {
    Header: 'CREATION DATE',
    accessor: 'createAt',
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
