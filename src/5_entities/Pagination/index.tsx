import './styles.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IPaginationProps {
  link: string;
  page: number;
  total_pages: number;
}

export const Pagination: FC<IPaginationProps> = ({
  link,
  page,
  total_pages,
}) => {
  const pagesBtns = [];

  if (page > 2) {
    for (let i = page - 1; i > page - 3; i--) {
      pagesBtns.unshift(
        <Link
          key={i}
          className={'btn btn-round pagination-item '}
          to={`${link}/${i}`}
        >
          {i}
        </Link>
      );
    }
  }

  if (page > 3) {
    pagesBtns.unshift(
      <Link
        key={1}
        className={'btn btn-round pagination-item pagination-item-fl'}
        to={`${link}/${1}`}
      >
        1...
      </Link>
    );
  }

  if (page <= total_pages - 2) {
    for (let i = page; i <= page + 2; i++) {
      const curClasses = i === page ? 'active' : '';

      pagesBtns.push(
        <Link
          key={i}
          className={'btn btn-round pagination-item ' + curClasses}
          to={`${link}/${i}`}
        >
          {i}
        </Link>
      );
    }

    // pagesBtns.push(
    //   <Link
    //     key={total_pages}
    //     className={'btn btn-round pagination-item pagination-item-fl'}
    //     to={`${link}/${total_pages}`}
    //   >
    //     ...{total_pages}
    //   </Link>
    // );
  }

  return (
    <section className='pagination'>
      <div className='container'>
        <div className='pagination-list'>{pagesBtns}</div>
      </div>
    </section>
  );
};
