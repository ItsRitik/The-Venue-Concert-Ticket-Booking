import React from 'react';
import { Table } from 'react-bootstrap';
import Moment from 'react-moment';

const HistoryBlock = ({ history }) => {
  return (
    <div className="table-container">
      {history && history.length > 0 ? (
        <Table responsive striped bordered hover className="text-sm md:text-base">
          <thead>
            <tr>
              <th>Date</th>
              <th>Products</th>
              <th>Amount paid</th>
              <th>Order ID</th>
            </tr>
          </thead>
          <tbody>
            {history.map((historyEntry, index) => (
              <React.Fragment key={index}>
                {historyEntry.map((item) => (
                  <tr key={item.transactionId}>
                    <td>
                      <Moment to={item.date}></Moment>
                    </td>
                    <td>
                      {item.items && item.items.length > 0 ? (
                        <ul className="list-unstyled">
                          {item.items.map((article, i) => (
                            <li key={i}>{article.name}</li>
                          ))}
                        </ul>
                      ) : (
                        'No items'
                      )}
                    </td>
                    <td>{item.amount}</td>
                    <td>{item.orderID}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </Table>
      ) : (
        <p className="mt-3">No transaction history available.</p>
      )}
    </div>
  );
};

export default HistoryBlock;
