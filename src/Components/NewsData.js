import React from 'react'
import Modal from 'react-awesome-modal';

function NewsData({isVisible,setIsVisible}) {
    
  return (
    <div>
        <Modal visible={isVisible} width="400" height="300" effect="fadeInUp" onClickAway={() => {setIsVisible(false)}}>
        </Modal>
    </div>
  )
}

export default NewsData
