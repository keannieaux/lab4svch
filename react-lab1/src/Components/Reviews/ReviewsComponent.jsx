import React, { useState, useEffect } from 'react';
import './Reviews.css';
import Reviews from './Reviews';
import reviewsData from '../../data/reviews.json'; 

function ReviewsComponent() {
    const [items, setItems] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [newItem, setNewItem] = useState({ author: '', job: '', image: '' });
    const [nextId, setNextId] = useState(4); 

    useEffect(() => {
        setItems(reviewsData);
    }, []);

    const openModal = (item) => {
        setCurrentItem(item);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setCurrentItem(null);
    };

    const saveChanges = () => {
        if (currentItem) {
            const updatedItems = items.map(item => {
                if (item.id === currentItem.id) {
                    return currentItem;
                }
                return item;
            });
            setItems(updatedItems);
            closeModal();
        }
    };

    const handleInputChange = (e) => {
        const newJob = e.target.value;
        if (currentItem) {
            setCurrentItem({ ...currentItem, job: newJob });
        }
    };

    const handleInputChanges = (e) => {
        const newAuthor = e.target.value;
        if (currentItem) {
            setCurrentItem({ ...currentItem, author: newAuthor });
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onload = () => {
            if (currentItem) {
                setCurrentItem({ ...currentItem, image: reader.result });
            }
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const deleteItem = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
        closeModal();
    };

    const addItem = () => {
        const updatedItems = [...items, { id: nextId, author: newItem.author, job: newItem.job, image: newItem.image }];
        setItems(updatedItems);
        setNextId(nextId + 1);
        setNewItem({ author: '', job: '', image: '' });
    };

    const handleNewAuthorChange = (e) => {
        setNewItem({ ...newItem, author: e.target.value });
    };

    const handleNewJobChange = (e) => {
        setNewItem({ ...newItem, job: e.target.value });
    };

    return (
        <main>
            <div className="rev1">
                <div className="rev2">
                    {items.map((item) => (
                        <div key={item.id} onClick={() => openModal(item)} style={{ cursor: 'pointer' }}>
                            <Reviews
                                image={item.image}
                                author={item.author}
                                job={item.job}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <button className="button" onClick={addItem}>Добавить карточку</button>

            {modalIsOpen && currentItem && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        {currentItem.image && <img src={currentItem.image} alt="Selected" style={{ maxWidth: '100%', marginBottom: '10px' }} />}
                        <input type="file" onChange={handleImageChange} accept="image/*" />
                        <h2>{currentItem.author}</h2>
                        <input
                            type="text"
                            value={currentItem.author}
                            onChange={handleInputChanges}
                        />
                        <p>{currentItem.job}</p>
                        <input
                            type="text"
                            value={currentItem.job}
                            onChange={handleInputChange}
                        />
                        <button className="button" onClick={saveChanges}>Сохранить изменения</button>
                        <button className="button delete" onClick={() => deleteItem(currentItem.id)}>Удалить карточку</button>
                    </div>
                </div>
            )}
        </main>
    );
}

export default ReviewsComponent;