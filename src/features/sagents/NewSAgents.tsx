import { useRef } from 'react';
import NewLoanReusableModal, { NewLoanModalPropsRef } from '../../ui/ReusableModal';

export default function NewSAgents() {
    const newSAgentModal = useRef<NewLoanModalPropsRef>(null);
  return (
    <NewLoanReusableModal title='Add Agent' ref={newSAgentModal} >
        <p>New Agent</p>
    </NewLoanReusableModal>
  )
}
