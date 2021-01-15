import React from 'react';

const Categories = ({ items }) => {
    const [activeItem, setActiveItem] = React.useState(null);

    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => setActiveItem(null)}
                    className={activeItem === null ? 'active' : ''}
                >
                    Все
                </li>
                {items && items.map((item, index) => (
                    <li
                        onClick={() => setActiveItem(index)}
                        key={`${item}_${index}`}
                        className={activeItem === index ? 'active' : ''}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
