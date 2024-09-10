/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-key */
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import React from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import { tHeader, tBody } from 'views/customer/constants';

const Customer = () => {
  return (
    <div className="d-flex flex-column gap-5">
      <h4 className="font-weight-bold px-4">Member</h4>
      <section className="scroll-section" id="hoverableRows">
        <OverlayScrollbarsComponent
          options={{ scrollbars: { autoHide: 'leave' }, overflowBehavior: { x: 'scroll', y: 'scroll' } }}
          style={{ maxHeight: '500px', width: '100%' }}
        >
          <Table hover>
            <thead>
              <tr>
                <th className="text-start px-4" scope="col">
                  Member Name
                </th>
                <th className="text-start" scope="col">
                  ID / Pass
                </th>
                <th className="text-center" scope="col">
                  ROLE
                </th>
                <th className="text-center" scope="col">
                  STATUS
                </th>
                <th className="text-center" scope="col">
                  CREATION DATE
                </th>
                <th className="text-center" scope="col">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {tBody.map((item) => (
                <tr index={item.id} style={{ verticalAlign: 'middle', height: '72px' }}>
                  <td className="d-flex flex-row px-4">
                    <img className="rounded-md" src={item.thum} alt="thum" style={{ width: '40px', height: '40px', marginRight: '19px' }} />
                    <Col>
                      <p className="m-0 font-weight-bold fs-6">{item.name}</p>
                      <p className="m-0">{item.email}</p>
                    </Col>
                  </td>
                  <td className="text-start">
                    <Col>
                      <p className="m-0 font-weight-bold fs-6">{item.country}</p>
                      <p className="m-0">{item.pass}</p>
                    </Col>
                  </td>
                  <td className="text-center">
                    <Button className="text-center p-0" style={{ width: '68px', height: '25px' }}>
                      <div style={{ fontSize: '12px', fontWeight: '700', lineHeight: '18.13px' }}>{item.role}</div>
                    </Button>
                  </td>
                  <td className="text-center">
                    <Button className="text-center p-0" style={{ width: '68px', height: '25px' }}>
                      <div style={{ fontSize: '12px', fontWeight: '700', lineHeight: '18.13px' }}>{item.status}</div>
                    </Button>
                  </td>
                  <td className="text-center">{item.createAt}</td>
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

export default Customer;
