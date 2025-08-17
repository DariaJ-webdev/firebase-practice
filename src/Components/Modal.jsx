import React from 'react';

function Modal({ showModal, onClose, isLoading, children }) {
    if (!showModal) {
        return null;
    }

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                {isLoading ? (
                    <div className="loading-screen visible">
                        <div className="loader"></div>
                    </div>
                ) : (
                    children
                )}
            </div>
        </div>
    );
}

export default Modal;