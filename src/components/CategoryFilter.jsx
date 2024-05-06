import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex items-center md:justify-center justify-start overflow-x-auto space-x-2 font-Josefin uppercase text-sm my-2 font-medium ">
      <button className={`uppercase btn ${selectedCategory.toLowerCase() === 'all' ? 'btn-selected bg-white border border-flowerpink rounded-full px-4 py-1' : 'bg-flowerpink rounded-full px-4 py-1'}`} onClick={() => onSelectCategory('all')}>Tout</button>
      {categories.map(category => (
        <button key={category} className={`uppercase btn ${selectedCategory.toLowerCase() === category.toLowerCase() ? 'btn-selected bg-white border border-flowerpink rounded-full px-4 py-1' : 'bg-flowerpink rounded-full px-4 py-1'}`} onClick={() => onSelectCategory(category)}>{category}</button>
      ))}
      <style jsx>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CategoryFilter;
