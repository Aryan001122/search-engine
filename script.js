document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.getElementById('searchBtn');
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
    const searchInput = document.getElementById('searchInput');
    const searchHistoryList = document.getElementById('searchHistoryList');
  
    let searchHistory = [];
  
    // Load search history from localStorage
    if (localStorage.getItem('searchHistory')) {
      searchHistory = JSON.parse(localStorage.getItem('searchHistory'));
      updateSearchHistory();
    }
  
    // Search button event listener
    searchBtn.addEventListener('click', function () {
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        searchHistory.push(searchTerm);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        updateSearchHistory();
        searchInput.value = ''; // Clear input field after search
      }
    });
  
    // Clear history button event listener
    clearHistoryBtn.addEventListener('click', function () {
      searchHistory = [];
      localStorage.removeItem('searchHistory');
      updateSearchHistory();
    });
  
    // Update search history in the UI
    function updateSearchHistory() {
      searchHistoryList.innerHTML = '';
      searchHistory.forEach((term) => {
        const li = document.createElement('li');
        li.textContent = term;
        searchHistoryList.appendChild(li);
      });
    }
  });
  