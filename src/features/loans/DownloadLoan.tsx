import { Document, PDFViewer, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import Loader from '../../ui/Loader';
import { useLoanDetails } from './useLoanDetails';
const styles = StyleSheet.create({
    page: {
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 1,
      flexGrow: 1
    },
    headerText: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#ff9900', /* Orange color */
        textTransform: 'uppercase',
      },
   
  });
export default function DownloadLoan() {
    const { loan, error, isLoading } = useLoanDetails();
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p className="text-red-500">{error.message}</p>;
  }
  if (!loan) {
    return <p>No loan found</p>;
  }
  console.log(loan);
  return (
    <PDFViewer className='h-screen w-screen'>
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text  >Section {loan.amountPaid}</Text>
        <Text style={styles.headerText}>Loan Information</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
  </PDFViewer>
  )
}
