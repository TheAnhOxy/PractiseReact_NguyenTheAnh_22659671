import React, { useState } from 'react';
import { Range } from 'react-range';
import '../Login.css';

const Results = ({ searchQuery }) => {
  const [timeRange, setTimeRange] = useState([30, 50]);
  const [isTypeOpen, setIsTypeOpen] = useState(true);
  const [isTimeOpen, setIsTimeOpen] = useState(true);
  const [isRatingOpen, setIsRatingOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9; // 3 dòng x 3 cột

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
      name, // Tên tùy chỉnh hoặc mặc định
      time: `${15 + (i % 15)} minutes`, // Thời gian thay đổi từ 15-30 phút
      image, // Ảnh tùy chỉnh hoặc mặc định
    };
  });

  // Phân trang
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage); // 99 sản phẩm -> 11 trang

  // Logic phân trang với dấu "..."
  const getPaginationItems = () => {
    const items = [];

    // Hiển thị các trang 1, 2, 3, 4
    const maxInitialPages = Math.min(4, totalPages); // Hiển thị tối đa 4 trang đầu
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
    <div className="no-results-layout">
      <div className="filters-section">
        <h2>FILTER</h2>
        <div className="filter-group">
          <h3
            className={`filter-title ${isTypeOpen ? 'active' : ''}`}
            onClick={() => setIsTypeOpen(!isTypeOpen)}
          >
            Type
          </h3>
          {isTypeOpen && (
            <div className="checkbox-grid">
              <label>
                <input type="checkbox" defaultChecked={false} onChange={() => {}} />
                Pan-fried
              </label>
              <label>
                <input type="checkbox" defaultChecked={false} onChange={() => {}} />
                Stir-fried
              </label>
              <label>
                <input type="checkbox" defaultChecked={true} onChange={() => {}} />
                Grilled
              </label>
              <label>
                <input type="checkbox" defaultChecked={true} onChange={() => {}} />
                Roasted
              </label>
              <label>
                <input type="checkbox" defaultChecked={false} onChange={() => {}} />
                Sautéed
              </label>
              <label>
                <input type="checkbox" defaultChecked={false} onChange={() => {}} />
                Baked
              </label>
              <label>
                <input type="checkbox" defaultChecked={false} onChange={() => {}} />
                Steamed
              </label>
              <label>
                <input type="checkbox" defaultChecked={false} onChange={() => {}} />
                Stewed
              </label>
            </div>
          )}
        </div>
        <div className="filter-group">
          <h3
            className={`filter-title ${isTimeOpen ? 'active' : ''}`}
            onClick={() => setIsTimeOpen(!isTimeOpen)}
          >
            Time
          </h3>
          {isTimeOpen && (
            <div className="range-container">
              <Range
                step={1}
                min={0}
                max={100}
                values={timeRange}
                onChange={(values) => setTimeRange(values)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '8px',
                      background: `linear-gradient(to right, #ddd ${timeRange[0]}%, #ff4d94 ${timeRange[0]}%, #ff4d94 ${timeRange[1]}%, #ddd ${timeRange[1]}%)`,
                      borderRadius: '4px',
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '15px',
                      width: '15px',
                      background: '#ff4d94',
                      borderRadius: '50%',
                      cursor: 'pointer',
                    }}
                  />
                )}
              />
              <span>
                {timeRange[0]} minutes - {timeRange[1]} minutes
              </span>
            </div>
          )}
        </div>
        <div className="filter-group">
          <h3
            className={`filter-title ${isRatingOpen ? 'active' : ''}`}
            onClick={() => setIsRatingOpen(!isRatingOpen)}
          >
            Rating
          </h3>
          {isRatingOpen && (
            <div className="rating-options">
              <label>
                <input type="checkbox" defaultChecked={false} onChange={() => {}} />
                <img src="/src/img/rating_5.png" alt="5 stars" className="rating-star" />
              </label>
              <label>
                <input type="checkbox" defaultChecked={false} onChange={() => {}} />
                <img src="/src/img/rating_4.png" alt="4 stars" className="rating-star" />
              </label>
              <label>
                <input type="checkbox" defaultChecked={true} onChange={() => {}} />
                <img src="/src/img/rating_3.png" alt="3 stars" className="rating-star" />
              </label>
              <label>
                <input type="checkbox" defaultChecked={false} onChange={() => {}} />
                <img src="/src/img/rating_2.png" alt="2 stars" className="rating-star" />
              </label>
              <label>
                <input type="checkbox" defaultChecked={false} onChange={() => {}} />
                <img src="/src/img/rating_1.png" alt="1 star" className="rating-star" />
              </label>
            </div>
          )}
        </div>
        <button className="apply-button">Apply</button>
      </div>
      <div className="results-section">
        <h2 className="results-title">Salad ({products.length})</h2>
        <div className="product-grid">
          {currentProducts.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <span className="product-name">{product.name}</span>
                <button className="product-button">
                  <img src="/src/img/iconButton.png" alt="Icon" className="button-icon" />
                </button>
              </div>
              <span className="product-time">{product.time}</span>
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
  );
};

export default Results;