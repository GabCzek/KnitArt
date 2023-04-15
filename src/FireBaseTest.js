import React, {useState, useEffect} from "react";
import {collection, getDocs, addDoc, deleteDoc, updateDoc, doc} from "firebase/firestore";

import {db, storage} from "./firebase";

const FireBaseTest = () => {
    const [templates, setTemplates] = useState([]);
    const [newTemplate, setNewTemplate] = useState();
    const [updatedName, setUpdatedName] = useState()

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

    const handleSubmitTemplate = async () => {
        try {
            await addDoc(templatesColRef, {name: newTemplate});
            getTemplates();
        } catch (err) {
            console.error(err)
        }
    }

    const deleteTemplate = async (id) => {
        const templateDoc = doc(db, "templates", id);
        await deleteDoc(templateDoc);
    }

    const updateTemplate = async (id) => {
        const templateDoc = doc(db, "templates", id)
        await updateDoc(templateDoc, {name: updatedName});
    }

    return (
        <>
            <input placeholder="Template name..." onChange={(e) => setNewTemplate(e.target.value)}/>
            <button onClick={handleSubmitTemplate}>add a new template</button>
            <div>
                {templates.map((template, i) => <div key={i}>
                    <h1>{template.name}</h1>
                    <button onClick={() => deleteTemplate(template.id)}>delete a template</button>
                    <input placeholder="new name..." onChange={e => setUpdatedName(e.target.value)}/>
                    <button onClick={() => updateTemplate(template.id)}>Update name</button>
                </div>)}
            </div>
        </>
    )
}

export default FireBaseTest;
