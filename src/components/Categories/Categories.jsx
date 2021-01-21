import React from 'react';

const Categories = ({ items }) => {
    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

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
                        onClick={() => onSelectItem(index)}
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
