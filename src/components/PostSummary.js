import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import styles from './PostSummary.module.less';

export default function PostSummary({
  author,
  slug,
  description,
  title,
  date,
}) {
  return (
    <article key={slug} className={styles.article}>
      <h3 className={styles.h3Style}>
        <Link style={{ boxShadow: 'none' }} to={slug}>
          {title}
        </Link>
      </h3>
      <p
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
      <div className={styles.postMeta}>
        {author && (
          <Fragment>
            <p className={styles.author}>{author}</p>
            <span className={styles.dot} />
          </Fragment>
        )}
        <time>{date}</time>
      </div>
    </article>
  );
}
