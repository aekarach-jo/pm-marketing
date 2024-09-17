/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-key */
import Table from 'components/table/Table';
import React, { useEffect, useMemo, useState } from 'react';
import { Form } from 'react-bootstrap';
import ConfirmModal from 'components/confirm-modal/ConfirmModal';
import { useGlobalFilter, usePagination, useRowState, useSortBy, useTable } from 'react-table';
import { moackData } from 'views/customer/constants';
import { useIsMobile } from 'hooks/useIsMobile';
import { getColumnDesktop, getColumnMobile } from './Columns';

const Customer = () => {
  const [filter, setFilter] = useState({});
  const [show, setShow] = useState(false);
  const [data, setData] = useState(moackData);
  const [textModal, settextModal] = useState({
    titleText: '',
    btnConfirm: '',
    btnCancel: '',
  });
  const pageCount = 1;

  const handlerShowModal = (condition) => {
    if (condition === 'add') {
      settextModal(() => {
        return { titleText: 'เพิ่ม', btnConfirm: 'เพิ่มข้อมูล', btnCancel: 'ยกเลิก' };
      });
    }
    if (condition === 'edit') {
      settextModal(() => {
        return { titleText: 'แก้ไข', btnConfirm: 'แก้ไข', btnCancel: 'ยกเลิก' };
      });
    }
    if (condition === 'delete') {
      settextModal(() => {
        return { titleText: 'ลบ', btnConfirm: 'ลบข้อมูล', btnCancel: 'ยกเลิก' };
      });
    }
    setShow(true);
  };

  const modalBody = () => {
    return (
      <div className={`d-flex flex-column gap-2  ${useIsMobile() ? 'w-100' : 'w-70'}`}>
        <div>Member Name</div>
        <Form.Control as="input" className="form-control" />
        <div>ID / Pass</div>
        <Form.Control as="input" className="form-control" />
      </div>
    );
  };

  const tableInstance = useTable(
    {
      columns: useIsMobile() ? useMemo(() => getColumnMobile(handlerShowModal), []) : useMemo(() => getColumnDesktop(handlerShowModal), []),
      data,
      filter,
      setData,
      setFilter,
      // manualPagination: false,
      // manualGlobalFilter: false,
      // manualSortBy: false,
      autoResetPage: false,
      autoResetSortBy: false,
      pageCount,
      initialState: { pageIndex: 0, hiddenColumns: ['id'] },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowState
  );

  const {
    state: { globalFilter, pageIndex: page, pageSize, sortBy },
  } = tableInstance;

  useEffect(() => {
    setFilter((currentFilter) => ({
      ...currentFilter,
      page,
    }));
  }, [page]);

  return (
    <div className="d-flex flex-column gap-2">
      <h4 className={`${useIsMobile() ? 'px-2' : 'px-4'} font-weight-bold`}>Member</h4>
      <Table tableInstance={tableInstance} isLoading={false} isPage />
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

export default Customer;
