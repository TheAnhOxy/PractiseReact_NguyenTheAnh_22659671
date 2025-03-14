import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Thêm Link từ react-router-dom
import Header_LoginSuc from './Header_LoginSuc';
import { Range } from 'react-range';
import '../index.css';
import '../Login.css';

const YourRecipeBox = () => {
  const [timeRange, setTimeRange] = useState([30, 50]);
  const [isTypeOpen, setIsTypeOpen] = useState(true);
  const [isTimeOpen, setIsTimeOpen] = useState(true);
  const [isRatingOpen, setIsRatingOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // 2 hàng x 4 cột

  // Danh sách tên riêng cho 9 sản phẩm đầu tiên
  const customNames = [
    'Cucumber Salad with Cherry Tomatoes',
    'Italian-Style Tomato Salad',
    'Potato Salad',
    'Five Color Salad',
    'Salad with Cabbage',
    'Lotus Delight Salad',
    'Lotus Delight Salad (Special)',
    'Lotus Delight Salad (Classic)',
    'Italian-Style Tomato Delight',
  ];

  // Danh sách sản phẩm với 9 ảnh và tên riêng cho 9 sản phẩm đầu tiên
  const products = Array.from({ length: 99 }, (_, i) => {
    const index = i + 1;
    let image;
    let name;

    // Gán ảnh và tên cho 9 sản phẩm đầu tiên
    if (index === 1) {
      image = '/src/img/cucumber_salad_charry_tomatoes.png';
      name = customNames[0];
    } else if (index === 2) {
      image = '/src/img/italian_style_tomato_salad.png';
      name = customNames[1];
    } else if (index === 3) {
      image = '/src/img/Potato Salad.png';
      name = customNames[2];
    } else if (index === 4) {
      image = '/src/img/five_color_salad.png';
      name = customNames[3];
    } else if (index === 5) {
      image = '/src/img/Salad with cabbage.png';
      name = customNames[4];
    } else if (index === 6) {
      image = '/src/img/lotus_delight_salad.png';
      name = customNames[5];
    } else if (index === 7) {
      image = '/src/img/Lotus delight salad.png';
      name = customNames[6];
    } else if (index === 8) {
      image = '/src/img/lotus_delight_salad.png';
      name = customNames[7];
    } else if (index === 9) {
      image = '/src/img/Italian-style tomato.png';
      name = customNames[8];
    } else {
      // Các sản phẩm từ 10 trở đi: tên mặc định và ảnh mặc định
      image = '/src/img/foodf.png';
      name = `Salad ${index}`;
    }

    return {
      name,
      time: `${15 + (i % 15)} minutes`,
      image,
    };
  });

  // Phân trang
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Logic phân trang với dấu "..."
  const getPaginationItems = () => {
    const items = [];

    // Hiển thị các trang 1, 2, 3, 4
    const maxInitialPages = Math.min(4, totalPages);
    for (let i = 1; i <= maxInitialPages; i++) {
      items.push(i);
    }

    // Nếu có nhiều hơn 4 trang, thêm dấu "..." và trang cuối
    if (totalPages > 4) {
      if (currentPage < totalPages - 2) {
        items.push('...');
      }
      if (totalPages > maxInitialPages) {
        items.push(totalPages);
      }
    }

    return items;
  };

  const paginationItems = getPaginationItems();

  return (
    <div className="your-recipe-box">
      {/* <Header_LoginSuc onSearchUpdate={() => {}} /> */}
      <div className="recipe-box-content">
        <div className="user-info">
          {/* Thêm breadcrumb phía trên h1 */}
          <nav className="breadcrumb">
            <Link to="/home-login" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator"> &gt; </span>
            <span className="breadcrumb-current">Your Recipe</span>
          </nav>
          <h1>Emma Gonzalez's Recipe Box</h1>
          <div className="user-profile">
            <img src="/src/img/avatar.png" alt="Emma Gonzalez" className="user-avatar" />
            <div className="user-description">
              <p>
                Emma Gonzalez is a deputy editor at Cheffy, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.
              </p>
              <div className="user-stats">
                <button className="subscribe-btn">6.5k Subscribers</button>
                <button className="share-btn">Share
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
                    </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="recipe-tabs">
          <button className="tab-btn active">Saved Recipes</button>
          <button className="tab-btn">Folders</button>
          <button className="tab-btn">Recipes by Genevieve</button>
        </div>
        <div className="results-section">
          <h2 className="results-title">Recipes ({products.length})</h2>
          <div className="product-grid1">
            {currentProducts.map((product, index) => (
              <div className="recipe-card" key={index}>
                <img src={product.image} alt={product.name} className="recipe-image" />
                <div className="recipe-info">
                  <span className="recipe-name">{product.name}</span>
                  <button className="recipe-button">
                    <img src="/src/img/iconButton.png" alt="Bookmark" className="bookmark-icon" />
                  </button>
                </div>
                <span className="recipe-time1">{product.time}</span>
              </div>
            ))}
          </div>
          <div className="pagination">
            {paginationItems.map((item, index) => (
              <React.Fragment key={index}>
                {item === '...' ? (
                  <span className="pagination-ellipsis">...</span>
                ) : (
                  <button
                    className={`page-button ${currentPage === item ? 'active' : ''}`}
                    onClick={() => setCurrentPage(item)}
                  >
                    {item}
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourRecipeBox;