import { ReactNode, forwardRef, useImperativeHandle, useRef } from 'react';

// export default function ReusableModal({children,title}:{children:ReactNode,title:string}) {
//     const newLoanModal = useRef<HTMLDialogElement>(null);
//   const openModal = () => {
//     newLoanModal.current?.showModal();
//   };
//   const closeModal = () => {
//     newLoanModal.current?.close();
//   };
//   return (
//     <>
    
// <button type='button' className="btn bg-green-600 hover:bg-green-500 text-white font-bold" onClick={openModal}>{title}</button>
// <dialog ref={newLoanModal} className="modal">
//   <div className="modal-box">
//     <div className="flex justify-end">
//       <button type="button" onClick={closeModal} className="text-2xl cursor-pointer">
//         X
//       </button>
//     </div>
//     {children}
   
//   </div>
// </dialog>
//     </>
//   )
// }

interface NewLoanModalProps {
  title:string;
  children:ReactNode;
}

export interface NewLoanModalPropsRef {
openModal:()=>void;
closeModal:()=>void;
}

const NewLoanReusableModal = forwardRef<NewLoanModalPropsRef,NewLoanModalProps>(({children,title},ref) => {
  const newLoanModal = useRef<HTMLDialogElement>(null);
  const openModal = () => {
    newLoanModal.current?.showModal();
  };
  const closeModal = () => {
    newLoanModal.current?.close();
  };
  useImperativeHandle(ref, () => ({
    openModal,
    closeModal,
  }));
  return (
    <>
    <button type='button' className="btn bg-green-600 hover:bg-green-500 text-white font-bold" onClick={openModal}>{title}</button>
<dialog ref={newLoanModal} className="modal">
  <div className="modal-box">
    <div className="flex justify-end">
      <button type="button" onClick={closeModal} className="text-2xl cursor-pointer">
        X
      </button>
    </div>
    {children}
   
  </div>
</dialog>
    </>
  )
});
export default NewLoanReusableModal;