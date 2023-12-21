const ChatFriendCard = ()  :JSX.Element => {
    return (
        <div className="friend-card">
            <div className="profile-pictures">
                 <img src="/images/hiro.jpeg" alt="" />
            </div>
            <div className="user-info">
                <div className="username">
                     <h5>Johan</h5>
                </div>
                <div className="add-btn">
                     <button className="btn">Ajouter</button>
                </div>
            </div>
        </div>
    );
};

export default ChatFriendCard;