const ChatContentHeader = ()  :JSX.Element => {
    return (
        <div className="section-header">
            <div className="user-info">
                  <div className="profile-picture">
                     <img src="/images/hiro.jpeg" alt="" />
                  </div>
                  <div className="profile-content">
                        <div className="username">
                             <h5>Hi Ro</h5>
                        </div>
                        <div className="status">
                             <p>En ligne</p>
                        </div>
                  </div>
            </div>
            <div className="options">
                 <img src="/images/info-icon.png" alt="" />
            </div>
        </div>
    );
};

export default ChatContentHeader;