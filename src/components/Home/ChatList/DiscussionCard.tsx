const DiscussionCard = (): JSX.Element => {
  return (
    <div className="discussion">
      <div className="user-pictures">
        <img src="/images/hiro.jpeg" alt="" />
      </div>
      <div className="user-info">
        <div className="name">
          <h5>Johan</h5>
        </div>
        <div className="message">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            culpa quidem sit aspernatur vitae dolor officia nulla beatae
            eligendi ducimus cum omnis, optio distinctio quae, aliquam et labore
            porro quam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscussionCard;
