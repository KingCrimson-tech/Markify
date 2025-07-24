document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('bookmark-list');
    const searchInput = document.getElementById('search');
  
    const renderBookmarks = (bookmarks) => {
      list.innerHTML = '';
      bookmarks.forEach(b => {
        if (!b.url) return;
        const li = document.createElement('li');
        li.innerHTML = `<a href="${b.url}" target="_blank">${b.title}</a>`;
        list.appendChild(li);
      });
    };
  
    const loadBookmarks = () => {
      browser.bookmarks.search({}).then(renderBookmarks);
    };
  
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value;
      browser.bookmarks.search(query).then(renderBookmarks);
    });
  
    loadBookmarks();
  });