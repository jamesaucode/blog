export const countTags = blogEntries => {
  const tags = {};
  blogEntries.forEach(({ node: { tag } }) => {
    if (tag) {
      if (tags[tag]) {
        ++tags[tag];
      } else {
        tags[tag] = 1;
      }
    }
  });
  return tags;
};

export const getSnippet = blogContent => {
  return `${blogContent.slice(0, Math.min(blogContent.length, 350))} ...`;
};