import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Inspect = () => {
  return (
    <div className="d-flex flex-column gap-5 px-4">
      <h4 className="font-weight-bold ">ตรวจสอบคำต้องห้ามในประโยค</h4>
      <div>
        <p className="mb-2">กรอกประโยค</p>
        <Form.Control as="textarea" className="form-textarea" />
        <Button className="float-end mt-2" style={{ background: '#CB0C9F' }}>
          ตรวจสอบ
        </Button>
      </div>
      <Form.Control />
    </div>
  );
};

export default Inspect;
