// Sample data
const posts = [
    { name: "White T-shirt", model: "Apparel", state: "No Stocks", submittedAt: "18:08 29/03/16", createdAt: "17:43 29/03/16" },
    { name: "Black Pants", model: "Apparel", state: "No Stocks", submittedAt: "16:26 29/03/16", createdAt: "16:00 29/03/16" },
    { name: "White Sando", model: "Apparel", state: "Low Stocks", submittedAt: "10:01 15/03/16", createdAt: "10:01 15/03/16" },
    { name: "Beige Hoodie", model: "Apparel", state: "Available", submittedAt: "16:38 3/02/16", createdAt: "16:36 3/02/16" },
    { name: "White Long-sleeves", model: "Apparel", state: "Available", submittedAt: "11:16 3/02/16", createdAt: "11:13 3/02/16" },
    { name: "Beige Cargo pants", model: "Apparel", state: "Available", submittedAt: "15:00 1/02/16", createdAt: "09:30 29/01/16" },
  ];
  
  // Populate the table
  const postsTable = document.getElementById('posts-table');
  posts.forEach(post => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${post.name}</td>
      <td>${post.model}</td>
      <td class="status-${post.state.toLowerCase()}">${post.state}</td>
      <td>${post.submittedAt}</td>
      <td>${post.createdAt}</td>
      <td><button class="options-btn">Options</button></td>
    `;
    postsTable.appendChild(row);
  });
  