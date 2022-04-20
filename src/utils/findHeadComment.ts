export const findHeadComment = (comment: string) => Array.from(document.head.childNodes)
  .filter((v) => v.nodeType === 8)
  .find((v) => v.textContent?.includes(comment)) as Comment;

export const injectStyleTo = (comment: string, css: string) => {
  const commentNode = findHeadComment(comment);
  const style = document.createElement('style');
  style.innerHTML = css;
  document.head.insertBefore(style, commentNode);
};
