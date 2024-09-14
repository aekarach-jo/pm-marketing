/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-key */
import Table from 'components/table/Table';
import React, { useMemo, useState } from 'react';
import { Button, Col } from 'react-bootstrap';
import { useGlobalFilter, usePagination, useRowState, useSortBy, useTable } from 'react-table';
import { moackData } from 'views/customer/constants';

const Customer = () => {
  const [filter, setFilter] = useState({});
  const [data, setData] = useState(moackData);
  const pageCount = 1;

  const columns = useMemo(() => {
    return [
      {
        accessor: 'id',
      },
      {
        Header: 'Member Name',
        accessor: 'name',
        sortable: true,
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
        sortable: true,
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
        sortable: true,
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
        sortable: true,
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
        sortable: true,
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
        headerClassName: 'text-medium text-muted',
        Cell: () => (
          <div className="text-medium text-center text-muted" style={{ width: '5rem' }}>
            <a className="mx-2 text-muted" href="#" style={{ color: 'gray' }}>
              Edit
            </a>
            <a href="#" className="text-muted" style={{ color: 'gray' }}>
              Delete
            </a>
          </div>
        ),
      },
    ];
  }, []);

  const tableInstance = useTable(
    {
      columns,
      data,
      filter,
      setData,
      setFilter,
      autoResetPage: false,
      autoResetSortBy: false,
      pageCount,
      initialState: { pageIndex: 0, sortBy: [{ id: 'no', desc: false }], hiddenColumns: ['id'] },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowState
  );
  return (
    <div className="d-flex flex-column gap-2">
      <h4 className="font-weight-bold px-4">Member</h4>
      <Table tableInstance={tableInstance} isLoading={false} hideControlsPageSize hideControlSearch />
    </div>
  );
};

export default Customer;
