import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onLoadMoreClick: () => void;
}

export default function LoadMoreBtn({ onLoadMoreClick }: LoadMoreBtnProps) {
  return (
 
    <div className={css.loadMoreBtnSection}>
      <button className={css.loadMoreBtn} type="button" onClick={onLoadMoreClick}>
        Load more ...
      </button>
    </div>
      
   
  );
}
