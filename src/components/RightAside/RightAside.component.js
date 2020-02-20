import React from 'react';

import './RightAside.styles.scss';
import avatar from '../../assets/images/avatar.png';

export const handleSubscribe = (e) => {
  e.preventDefault();
  return 'subscribed';
};

const RightAside = () => (
  <aside className="right-aside">
    <div className="popular-articles">
      <h3 className="popular-articles-title">Popular</h3>

      <div className="popular-article-block">
        <img src={avatar} />
        <p className="popular-articles-text">
          <a href="" className="popular-article-comment">
            Lorem Ipsum
          </a>
          <a href="" className="popular-article-title">
            cupidatat non proident, sunt in culpa qui officia deserunt mollit.
          </a>
        </p>
      </div>

      <div className="popular-article-block">
        <img src={avatar} />
        <p className="popular-articles-text">
          <a href="" className="popular-article-comment">
            Lorem Ipsum
          </a>
          <a href="" className="popular-article-title">
            cupidatat non proident, sunt in culpa qui officia deserunt mollit.
          </a>
        </p>
      </div>

      <div className="popular-article-block">
        <img src={avatar} />
        <p className="popular-articles-text">
          <a href="" className="popular-article-comment">
            Lorem Ipsum
          </a>
          <a href="" className="popular-article-title">
            cupidatat non proident, sunt in culpa qui officia deserunt mollit.
          </a>
        </p>
      </div>

      <div className="popular-article-block">
        <img src={avatar} />
        <p className="popular-articles-text">
          <a href="" className="popular-article-comment">
            Lorem Ipsum
          </a>
          <a href="" className="popular-article-title">
            cupidatat non proident, sunt in culpa qui officia deserunt mollit.
          </a>
        </p>
      </div>

      <div className="popular-article-block">
        <img src={avatar} />
        <p className="popular-articles-text">
          <a href="" className="popular-article-comment">
            Lorem Ipsum
          </a>
          <a href="" className="popular-article-title">
            cupidatat non proident, sunt in culpa qui officia deserunt mollit.
          </a>
        </p>
      </div>
    </div>
    <form
      className="subscribe-form"
      onSubmit={handleSubscribe}
      data-testid="subscribe-form"
    >
      <label htmlFor="email">Subscribe</label>
      <input type="email" name="subscribe-email" placeholder="Email" />
      <button
        type="submit"
        name="submit"
        data-testid="subscribe-button"
      >
        Subscribe
      </button>
    </form>
  </aside>
);

export default RightAside;
