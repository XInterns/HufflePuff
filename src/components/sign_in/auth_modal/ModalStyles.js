export default {
    '@global': {
      'body': { overflowY: 'scroll' },
    },
    
    modalOverlay: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      padding: '1rem',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      zIndex: '9999',
      opacity: 1,
      overflowX: 'hidden',
      overflowY: 'auto',
      animation: 'show .5s ease',
    },
    
    // Fade-in open animation
    '@keyframes show': {
      '0%': {
        display: 'none',
        opacity: 0,
      },
      '1%': {
        display: 'flex',
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },
  
    modal: {
      width: '100%',
      backgroundColor: '#000',
      boxShadow: [0, 0, '0.625rem', 'rgba(0, 0, 0, 0.2)'],
      textAlign: 'center',

      '@media (min-width: 576px)': {
        width: '32rem',
      },
    },
  
    closeButton: {
      position: 'relative',
      top: -21,
      left: 224,
      background: '#111',
      width: '1rem',
      height: '1rem',
      padding: 0,
      border: 0,
      cursor: 'pointer',
      outline: 0,
  
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '0.5rem',
        left: '0.08rem',
        width: '1rem',
        height: '0.1rem',
        backgroundColor: '#db4437',
      },
  
      '&:before': { transform: 'rotate(45deg)' },
      '&:after': { transform: 'rotate(-45deg)' },
  
      '&:hover:before, &:hover:after': {
        backgroundColor: '#fff',
      },
    },
  };
