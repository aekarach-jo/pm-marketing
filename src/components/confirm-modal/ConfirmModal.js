import React, { useEffect, useState } from 'react';
import { Button, Modal, Row } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

import clx from 'classnames';

const ConfirmModal = ({ titleText, body, okText, cancelText, show, className, loading, onConfirm, onCancel, ...rest }) => {
  const { formatMessage: f } = useIntl();
  console.log(body);

  return (
    <Modal
      className={clx('large fade', className)}
      show={show}
      onHide={onCancel}
      contentClassName={clx({ 'overlay-spinner': loading })}
      backdrop={loading ? 'static' : true}
      {...rest}
    >
      <Modal.Header>
        <Modal.Title>{titleText || 'Confirmation'}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">{body()}</Modal.Body>
      <div className="d-flex flex-row justify-content-center gap-2 w-60 m-auto mb-5">
        <Button className="w-100" variant="light" onClick={onCancel} disabled={loading}>
          {cancelText || f({ id: 'common.cancel' })}
        </Button>
        <Button className="w-100" variant="primary" onClick={onConfirm} disabled={loading} style={{ background: '#CB0C9F' }}>
          {okText || f({ id: 'common.ok' })}
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
