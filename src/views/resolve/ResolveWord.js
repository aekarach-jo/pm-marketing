/* eslint-disable react/jsx-key */
import React from 'react';
import { Button, Col, Table } from 'react-bootstrap';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { tBody } from './constants';

const ResolveWord = () => {
  return (
    <div className="d-flex flex-column gap-5">
      <h4 className="font-weight-bold px-4">คำที่อนุมัติ</h4>
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
                <th className="text-muted text-center" scope="col">
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
                  <td className="text-center" style={{ fontWeight: '400' }}>
                    <div>{item.correction}</div>
                  </td>
                  <td className="text-center">
                    <a className="mx-2" href="#" style={{ color: 'gray' }}>
                      Edit
                    </a>
                    <a href="#" style={{ color: 'gray' }}>
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </OverlayScrollbarsComponent>
      </section>
    </div>
  );
};

export default ResolveWord;
