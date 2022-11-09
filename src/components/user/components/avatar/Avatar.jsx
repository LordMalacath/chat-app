import "./style.scss"

//----------------------------------------------------------------

export default function Avatar({ photoUrl }) {
    return (
        <div className='user__avatar'>
            <img alt='Avatar' src={photoUrl} />
        </div>
    )
};
