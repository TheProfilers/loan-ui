import domToImage from 'dom-to-image';
import jsPDF from 'jspdf';
import { useState } from 'react';
import ColumnText from '../../ui/ColumnText';
import Loader from '../../ui/Loader';
import './download.css';
import { useLoanDetails } from './useLoanDetails';


export default function DownloadLoan() {
  const [isDownloading, setIsDownloading] = useState(false);
  const downloadPDF = async () => {
    const capture = document.querySelector('.actual-receipt') as HTMLElement;
  
    if (capture) {
      setIsDownloading(true);
      try {
        const dataUrl = await domToImage.toPng(capture);
        
        const img = new Image();
        img.src = dataUrl;

        const doc = new jsPDF('p', 'px', 'a4',true);
        const width = doc.internal.pageSize.getWidth();
        const height = doc.internal.pageSize.getHeight();
        doc.addImage(img, 'PNG', 0, 0, width, height);
        doc.save('download.pdf');
        setIsDownloading(false);
      } catch (error) {
        setIsDownloading(false);
        console.error('Error capturing element:', error);
      }
    } else {
      setIsDownloading(false);
      console.error('Element not found.');
    }
  };
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
    <>
    <div className='actual-receipt'>
      
    
      <h1 className="text-lg font-medium text-orange-500 uppercase px-4">
        Loan Information
      </h1>

      <div className="md:flex justify-between shadow p-3">
        <div>
          <ColumnText title="Loan Amount" text={loan.loanAmount.toString()} />
          <ColumnText title="Loan Reason" text={loan.loanReason} />
        </div>
        <div>
          <ColumnText
            title="Loan Balance"
            text={(loan.loanAmount - loan.amountPaid).toString()}
          />
          <ColumnText title="Amount Paid" text={loan.amountPaid.toString()} />
        </div>
      </div>

      <h1 className="text-lg font-medium text-orange-500 uppercase px-4">
        Loanee Information
      </h1>

     {loan.loanee ?  <div className="shadow grid grid-cols-2 md:grid-cols-4 gap-8 p-4 mt-2">
        <ColumnText title="First name" text={loan.loanee.firstName} />
        <ColumnText title="Last name" text={loan.loanee.lastName} />
        <ColumnText title="Id Number" text={loan.loanee.idNumber} />
        <ColumnText title="Phone Number" text={loan.loanee.phoneNumber} />
      </div> : <div>Not Available</div>}
      <h1 className="text-lg font-medium text-orange-500 uppercase px-4">
        Agent Information
      </h1>

      {loan.servedBy ? <div className="shadow grid grid-cols-2 md:grid-cols-4 gap-8 p-4 mt-2">
        {loan.servedBy? <ColumnText title="Full Name" text={loan.servedBy.name!} /> : <ColumnText title="Full Name" text="Agent Not Available" />}
        <ColumnText title="Phone Number" text={loan.servedBy.phone!} />
        <ColumnText title="Email" text={loan.servedBy.email} />
      </div> : <div>Not Available</div>}
     
      
    </div>
    <button className='btn btn-primary mt-2' disabled={isDownloading} onClick={downloadPDF}>{isDownloading ? 'Downloading': 'Download PDF'}</button>
    </>

  )
}
