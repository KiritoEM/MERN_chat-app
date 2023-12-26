const ChatContentdefault = (): JSX.Element => {
  return (
    <div id="chat-defaultcontent">
      <div id="chat-defaultcontent__container">
        <div className="title">
          <h2>Aucune discussion séléctionnée</h2>
        </div>
        <div className="subtitle">
          <h5>Veuillez seléctionner une discussion</h5>
        </div>
      </div>
    </div>
  );
};

export default ChatContentdefault;
