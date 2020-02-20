import React from 'react';

import './FeaturedArticle.styles.scss';

const FeaturedArticle = () => (
  <div className="featured-article">
    <img
      src="../../assets/images/avatar.png"
      className="featured-article-image"
    />
    <a href="#" className="featured-article-category">
        in Category
    </a>
    <p className="featured-article-details">
      <span className="featured-article-date">12/10/2020</span>
      <span className="featured-article-comments">234 comments</span>
    </p>
    <h3 className="featured-article-title">lorem ipsum title</h3>
    <p className="featured-article-content">
        lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua hic tempora est
        veritatis culpa fugiat doloribus fugit in sed harum veniam porro eveniet
        maxime labore assumenda non illum possimus aut vero laudantium cum magni
        numquam dolorem explicabo quidem quasi nesciunt ipsum deleniti facilis
        neque similique nisi ad magnam accusamus quae provident dolor ab atque
        modi laboriosam fuga suscipit ea beatae ipsam consequatur saepe dolore
        nulla error quo iusto expedita nemo commodi aspernatur aliquam enim
        reiciendis rerum necessitatibus recusandae sint amet placeat temporibus
        autem iste deserunt esse dolores reprehenderit doloremque pariatur velit
        maiores repellat dignissimos asperiores aperiam alias a corporis id
    </p>
  </div>
);

export default FeaturedArticle;
