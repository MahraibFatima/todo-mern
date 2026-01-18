import React from 'react'

const Navbar = () => {
  return (
    <nav style={{
      background: 'linear-gradient(135deg, #B7B89F 0%, #CBCBCB 0%)',
      padding: '1rem 2rem',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      marginBottom: '2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <div style={{
            fontSize: '1.5rem',
            background: 'white',
            borderRadius: '8px',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            ✓
          </div>
          <h1 style={{
            color: 'black',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: 0
          }}>
          </h1>
        </div>
        <div >
            <h1 style={{
                color: 'black',
                fontSize: '1.5rem',
                fontWeight: '600',
                margin: 0
            }}>
                Todo App
            </h1>
        </div>
        <div style={{
          color: 'black',
          fontSize: '0.9rem',
          opacity: '0.9'
        }}>
          Stay Organized
        </div>
      </div>
    </nav>
  )
}

export default Navbar
