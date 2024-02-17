export function Card(props) {
    // console.log(props.interests)
    {props.interests.map((interest)=>{
        console.log(interest);
    })}
    return(
        
        <div style={styles.card}>
            <h1 style = {styles.name}>{props.name}</h1>
            <p style={styles.description}>{props.description}</p>
            <h3 style = {styles.interestsHeader}>Interests</h3>
            <ul style={styles.list}>
                {props.interests.map((interest)=>(
                     <li style = {styles.items}>{interest}</li>
                ))}
            </ul>
            <div style={styles.socials}>
                <a href={props.linkedin} target = "_blank" rel="noopener noreferrer" style={styles.button}>
                    Linkedin</a>
                <a href = {props.twitter} target = "_blank" rel="noopener noreferrer" style={styles.button}>
                    Twitter</a>
                {props.otherSocialMedia && (
                    <a href={props.otherSocialMedia} target = "_blank" rel="noopener noreferrer" style = {styles.button}>
                    OtherSocialMedia
                    </a>
                )}
            </div>
        </div>
    );
}

const styles= {
    card: {
        border: '1px solid black',
        borderRadius: '6px',
        margin: '10px',
        padding: '20px',
        maxWidth: '400px',
        backgroundColor: '#757d77',
         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }, 
    name: {
        fontSize: '40px',
        marginBottom: '10px',
    },
    description: {
        fontSize: '20px',
        marginBottom: '10px'
    },
    interestsHeader: {
        fontSize: '25px',
         marginBottom: '10px'
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    items: {
        fontSize: '20px',
    },
    socials: {
        display: 'flex',
        marginBottom: '10px'
    }, 
    button: {
        textDecoration: 'none',
        display: 'inline-block',
        backgroundColor: '#000', 
        color:'#fff',
        borderRadius: '2px',
        padding: '10px 15px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        margin: '10px'
    }
}

