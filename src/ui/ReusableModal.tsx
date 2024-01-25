import { ReactNode, forwardRef, useImperativeHandle, useRef } from 'react';



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
    <button type='button' className="bg-green-600 hover:bg-green-500 text-white font-bold btn-sm" onClick={openModal}>{title}</button>
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