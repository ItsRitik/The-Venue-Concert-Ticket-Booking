import React from 'react';
import { Table } from 'react-bootstrap';
import Moment from 'react-moment';
// import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: { flexDirection: 'column', padding: 10, backgroundColor:"#e2e8f0" },
//   section: { marginHorizontal: 25, marginVertical:8, fontSize: 24 },
//   mainhead:{
//     fontSize:36,
//     fontWeight:"heavy"
//   },
//   header:{
//     textAlign:'center',
//     backgroundColor:"#1f2937",
//     color:"#e2e8f0",
//     padding: 20
//   },
//   ordersT:{
//     fontSize:10,
//     paddingVertical:2
//   },
//   type:{
//     fontSize:22,
//     marginTop:3,
//     fontWeight:"heavy"
//   },
//   ticketV:{
//     flexDirection: 'row',
//     justifyContent:"space-between",
//     paddingVertical:4
//   },
//   ticketN:{
//     fontSize:18
//   },
//   ticketNum:{
//     fontSize:10,
//     paddingLeft:12
//   },
//   ordersdeV:{
//     marginTop:3,
//     flexDirection: 'row',
//     justifyContent:"space-between",
//     backgroundColor:"#ede9fe",
//     padding:10
//   },
//   ordersde:{
//     color:"#4c1d95",
//     fontSize:12,
//     fontWeight:"bold",
//     paddingVertical:1,
//   },
//   last:{
//     fontSize:10,
//     position:"fixed",
//     marginTop:4,
//     color:"red"
//   }
// });


// const Invoice = ({ order }) => (
//   <Document>
//     <Page size={{ width: 500, height: 400 }} style={styles.page}>
//       <View style={styles.header}>
//       <Text style={styles.mainhead}>The Venue </Text>
//       </View>
//       <View style={styles.section}>

//         <Text style={styles.ordersT}>Order ID: {order.orderID}</Text>
//         <Text style={styles.ordersT}>Order_Date: {order.date}</Text>
//         <Text style={styles.ordersT}>Total Amount paid: {order.amount}</Text>
//         <View style={styles.ordersdeV}>
//         <View >
//         <Text style={styles.ordersde}>Performar: The Coldplay</Text>
//         <Text style={styles.ordersde}>Music of the Spheres World Tour</Text>
//         </View>
//         <View>
//         <Text style={styles.ordersde}>Location: Barclays Center</Text>
//         <Text style={styles.ordersde}>620 Atlantic Ave, Brooklyn, NY 11217</Text>
//         </View>
//         </View>
//         <Text style={styles.type}>Ticket Type:</Text>
//         {order.items && order.items.length > 0 ? (
//           order.items.flat().map((e, j) => (
//             <View style={styles.ticketV} key={j} >
//               <View >
//               <Text style={styles.ticketN}>{`\u2022 ${e.name}`}</Text>
//               <Text style={styles.ticketNum}>Number of tickets:{e.quantity}</Text>
//             </View>
//             <View>
//               <Text>${e.unit_amount.value * e.quantity}</Text>
//             </View>
//             </View>
//           ))
//         ) : (
//           <Text>No items</Text>
//         )}
//         <View>
//           <Text style={styles.last}>Seating is available on a first-come, first-served basis. We encourage you to arrive on time to ensure the best experience. Thank you!</Text>
//         </View>
//       </View>
//     </Page>
//   </Document>

// );

const HistoryBlock = ({ history }) => {
    console.log(history);

  return (
    <div className="table-container">
        <Table responsive striped bordered hover className="text-sm md:text-base">
          <thead>
            <tr>
              <th>Date</th>
              <th>Products</th>
              <th>Amount paid</th>
              <th>Order ID</th>
              {/* <th>Tickets</th> */}
            </tr>
          </thead>
          <tbody>
          { history.map((item)=>(
                        <tr key={item.transactionId}>
                            <td><Moment to={item.date}></Moment></td>
                            <td>
                                { item.items.map((article,i)=>(
                                    <div key={i}>{article.name}</div>
                                ))}
                            </td>
                            <td>{item.amount}</td>
                            <td>{item.orderID}</td>
                            {/* <td>
                          <PDFDownloadLink
                            style={{
                              color: 'Blue',
                              fontSize: '12px',
                              padding: '8px',
                            }}
                            document={<Invoice order={item} />}
                            fileName={`Concert_Ticket.pdf`}
                          >
                            {({ blob, url, loading, error }) =>
                              loading ? 'Loading document...' : 'Download Ticket'
                            }
                          </PDFDownloadLink>
                        </td> */}
                        </tr>
                    ))}
           
          </tbody>
        </Table>
    </div>
  );
};

export default HistoryBlock;
