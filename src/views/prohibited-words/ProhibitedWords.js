/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import ConfirmModal from 'components/confirm-modal/ConfirmModal';
import { tBody } from './constants';

const ProhibitedWords = () => {
  const [show, setShow] = useState(false);
  const [textModal, settextModal] = useState({
    titleText: '',
    btnConfirm: '',
    btnCancel: '',
  });

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
      <div className="d-flex flex-column gap-2 w-70">
        <div>คำต้องห้าม</div>
        <Form.Control as="input" className="form-control" />
        <div>แก้ไข</div>
        <Form.Control as="input" className="form-control" />
      </div>
    );
  };
  return (
    <div className="d-flex flex-column gap-5">
      <div className="d-flex flex-row justify-content-between  px-4">
        <h4 className="font-weight-bold">คำต้องห้าม</h4>
        <Button className="mr-3" style={{ background: '#CB0C9F' }} onClick={() => handlerShowModal('add')}>
          เพิ่มข้อมูล
        </Button>
      </div>
      <section className="scroll-section" id="hoverableRows">
        <OverlayScrollbarsComponent
          options={{ scrollbars: { autoHide: 'leave' }, overflowBehavior: { x: 'hidden', y: 'scroll' } }}
          style={{ maxHeight: '500px', width: '100%' }}
        >
          <Table hover>
            <thead>
              <tr>
                <th className="text-muted text-start px-4" scope="col">
                  No
                </th>
                <th className="text-muted text-start" scope="col">
                  Prohibited words
                </th>
                <th className="text-muted text-start" scope="col">
                  Correction
                </th>
                <th className="text-muted text-center" scope="col">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody>
              {tBody.map((item, index) => (
                <tr index={item.id} style={{ verticalAlign: 'middle', height: '72px' }}>
                  <td className="text-start px-4" style={{ fontWeight: '600' }}>
                    <div>{index + 1}</div>
                  </td>
                  <td className="text-start" style={{ fontWeight: '600' }}>
                    <div>{item.word}</div>
                  </td>
                  <td className="text-start" style={{ fontWeight: '400' }}>
                    <div>{item.correction}</div>
                  </td>
                  <td className="text-center">
                    <a className="mx-2" href="#" style={{ color: 'gray' }} onClick={() => handlerShowModal('edit')}>
                      Edit
                    </a>
                    <a href="#" style={{ color: 'gray' }} onClick={() => handlerShowModal('delete')}>
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </OverlayScrollbarsComponent>
      </section>

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
