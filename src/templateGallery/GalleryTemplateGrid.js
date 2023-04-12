import React, {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../config/firebase";

const GalleryTemplateGrid = ({gridColor}) => {
    const [templates, setTemplates] = useState([]);

    const templatesColRef = collection(db, 'templates');
    const getTemplates = async () => {
        try {
            const data = await getDocs(templatesColRef)
            const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
            setTemplates(filteredData);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getTemplates();
    }, []);

    const arr = new Array(20 * 20).fill('');

    // Zrobić tak, żeby renderował się grid ładnie, plus zmienić gridTemplateColumns na numer stitches z firebase

    return (
        <div className="templates-grid">
            <div className="template-gallery-grid"
                 style={{
                     display: "grid",
                     gridTemplateColumns: `repeat(20, 0.6em)`,
                     gap: 1
                 }}>
                {templates > 0 && templates[2].grid.map((el, i) => <div key={i} style={{
                    backgroundColor: el.color,
                    borderRadius: "50%",
                    height: "0.6em",
                    cursor: "pointer"
                }}></div>)}
            </div>
        </div>
    )
};

export default GalleryTemplateGrid;