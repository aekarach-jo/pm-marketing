/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-key */
import React, { useMemo, useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import Table from 'components/table/Table';
import ConfirmModal from 'components/confirm-modal/ConfirmModal';
import { useGlobalFilter, usePagination, useRowState, useSortBy, useTable } from 'react-table';
import { useIsMobile } from 'hooks/useIsMobile';
import { moackData } from './constants';

const ProhibitedWords = () => {
  const [show, setShow] = useState(false);
  const [textModal, settextModal] = useState({
    titleText: '',
    btnConfirm: '',
    btnCancel: '',
  });
  const [filter, setFilter] = useState({});
  const [data, setData] = useState(moackData);
  const pageCount = 1;

  const handlerShowModal = (condition) => {
    if (condition === 'add') {
      settextModal(() => {
        return { titleText: 'เพิ่มคำต้องห้าม', btnConfirm: 'เพิ่มข้อมูล', btnCancel: 'ยกเลิก' };
      });
    }
    if (condition === 'edit') {
      settextModal(() => {
        return { titleText: 'แก้ไข', btnConfirm: 'แก้ไข', btnCancel: 'ยกเลิก' };
      });
    }
    if (condition === 'delete') {
      settextModal(() => {
        return { titleText: 'ลบคำต้องห้าม', btnConfirm: 'ลบข้อมูล', btnCancel: 'ยกเลิก' };
      });
    }
    setShow(true);
  };

  const modalBody = () => {
    return (
      <div className={`d-flex flex-column gap-2  ${useIsMobile() ? 'w-100' : 'w-70'}`}>
        <div>คำต้องห้าม</div>
        <Form.Control as="input" className="form-control" />
        <div>แก้ไข</div>
        <Form.Control as="input" className="form-control" />
      </div>
    );
  };
  const columns = useMemo(() => {
    return [
      {
        accessor: 'id',
      },
      {
        Header: 'NO',
        accessor: 'number',
        sortable: true,
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
        sortable: true,
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
        headerClassName: 'text-medium text-muted text-end',
        Cell: () => (
          <div className="text-medium float-end " style={{ width: '5rem' }}>
            <a className="mx-2 text-muted" href="#" style={{ color: 'gray' }} onClick={() => handlerShowModal('edit')}>
              Edit
            </a>
            <a href="#" className="text-muted" style={{ color: 'gray' }} onClick={() => handlerShowModal('delete')}>
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
      initialState: { pageIndex: 0, sortBy: [{ id: 'number', desc: false }], hiddenColumns: ['id'] },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowState
  );
  return (
    <div className="d-flex flex-column gap-2">
      <div className="px-3 d-flex flex-row justify-content-between">
        <h4 className="font-weight-bold ">คำต้องห้าม</h4>
        <Button className="mr-3" style={{ background: '#CB0C9F', width: useIsMobile() ? '100px' : '161px' }} onClick={() => handlerShowModal('add')}>
          เพิ่มข้อมูล
        </Button>
      </div>
      <Table tableInstance={tableInstance} isLoading={false} hideControlsPageSize hideControlSearch />
      <ConfirmModal
        titleText={textModal.titleText}
        body={modalBody}
        okText={textModal.btnConfirm}
        cancelText={textModal.btnCancel}
        show={show}
        className=""
        loading=""
        onConfirm=""
        onCancel={() => setShow(false)}
      />
    </div>
  );
};

export default ProhibitedWords;
