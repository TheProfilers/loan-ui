import { useRef } from 'react'

export default function NewLoanModal() {
    const newLoanModal = useRef<HTMLDialogElement>(null)
    const openModal = () => {
        newLoanModal.current?.showModal()
    }
    const closeModal = () => {
        newLoanModal.current?.close()
    }
  return (
    <>
    {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={openModal}>New Loanee</button>
<dialog ref={newLoanModal} className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button onClick={closeModal} className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </>
  )
}
