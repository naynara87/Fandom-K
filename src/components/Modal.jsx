import React from 'react';
import './Modal.css';

import handleBackgroundClick from '../utils/handleBackgroundClick';
import useEscapeModal from '../hooks/useEscapeModal';

function Modal({ title, closeModal, children, footer, className = '' }) {
  useEscapeModal(closeModal);

  return (
    <div className="modal-overlay" onClick={(e) => handleBackgroundClick(e, closeModal)}>
      <div className={`modal ${className}`}>
        <div className="modal-header">
          {title && <h4 className="title">{title}</h4>}
          <button type="button" className="btn-close" onClick={closeModal} aria-label="닫기 버튼" />
        </div>
        <div className="modal-content">{children}</div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
}

export default Modal;
