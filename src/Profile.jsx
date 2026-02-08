import { useState } from 'react';

function Profile(props) {
    const { name, occupation, funFact } = props;
    const [showDetail, setShowDetail] = useState(false);
    const toggleDetail = () => {
        setShowDetail(!showDetail);
    };

    return (
        <div style={{
            maxWidth: '350px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '12px',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
            margin: '20px auto',
            backgroundColor: '#DAB1DA',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
            <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>

            <p style={{ margin: '4px 0', fontSize: '16px' }}>
                {occupation}
            </p>

            <button onClick={toggleDetail} style={{
                marginTop: '12px',
                padding: '8px 16px',
                fontSize: '14px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: '#000000',
                color: 'white'
            }}>
                {showDetail ? 'Hide Fun Fact' : 'Show Fun Fact'}
            </button>

            {/* Conditional Rendering */}
            {showDetail && <p style={{ marginTop: '16px', fontSize: '14px' }}>{funFact}</p>}
        </div>
    );
}

export default Profile;