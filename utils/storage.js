const saveTag = async (id, tags) => {
    const data = await browser.storage.local.get('tags');
    const allTags = data.tags || {};
    allTags[id] = tags;
    await browser.storage.local.set({ tags: allTags });
  };
  
  const getTag = async (id) => {
    const data = await browser.storage.local.get('tags');
    return data.tags ? data.tags[id] : [];
  };
  
  const removeTag = async (id) => {
    const data = await browser.storage.local.get('tags');
    const allTags = data.tags || {};
    delete allTags[id];
    await browser.storage.local.set({ tags: allTags });
  };
  
  window.markifyStorage = { saveTag, getTag, removeTag };