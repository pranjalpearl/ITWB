// components/SearchModal.js
import React from 'react';

const SearchModal = ({ isOpen, onClose, searchParams }) => {
    if (!isOpen) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999
            }}
        >
            <div
                style={{
                    background: '#fff',
                    padding: '30px',
                    borderRadius: '8px',
                    minWidth: '300px',
                    textAlign: 'center',
                    position: 'relative'
                }}
            >
                <h3 style={{ marginBottom: '15px' }}>Coming Soon</h3>
                <div style={{ textAlign: 'left', marginBottom: '20px', fontSize: '14px', color: '#555' }}>
                    <p><strong>Country ID:</strong> {searchParams.countryId || 'Not Selected'}</p>
                    <p><strong>State ID:</strong> {searchParams.stateId || 'Not Selected'}</p>
                    <p><strong>Tour Type:</strong> {searchParams.tourType || 'Not Selected'}</p>
                </div>

                <button
                    onClick={onClose}
                    className="btn btn-primary" // Assuming you have bootstrap or theme classes
                    style={{ padding: '8px 20px', cursor: 'pointer' }}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default SearchModal;