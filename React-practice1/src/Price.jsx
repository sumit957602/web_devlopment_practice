function Price({ oldPrice, newPrice }) {
    let oldstyles = { 
        textDecoration: 'line-through',
        color: 'black'
    };
    let newstyles = {
        fontWeight: 'bold',
    };
    let styles = {
        display: 'flex',
        allignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e0c367',
        height: '30px',
        width: '200px',
        borderBottomLeftRadius: '14px',
        borderBottomRightRadius: '14px',
    };
    return (
        <div style={styles}>
            <span style={oldstyles}>{oldPrice}</span>
            &nbsp; &nbsp; &nbsp;
            <span style={newstyles}>{newPrice}</span>
        </div>
    );
}

export default Price;