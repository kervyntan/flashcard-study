import React, { useEffect, useRef, useState } from 'react';
import { db } from '../firebase';
import { Card, Input, Text, Select } from '@mantine/core';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';

const ListFlashcards = () => {
    const dbRef = collection(db, "flashcards");
    const showRef = useRef("");
    const [show, setShow] = useState(showRef.current.value);
    const [flashcards, setFlashcards] = useState([]);
    let displayFlashcards = "";
    useEffect(() => {
        onSnapshot(dbRef, docs => {
            // console.log(docs);
            docs.forEach(doc => {
                setFlashcards((flashcards) => [...flashcards, doc.data()]);
            })
        });

        console.log(show);
        if (show == "one") {
            console.log(flashcards.slice(1));
            setFlashcards(flashcards.slice(1));
        } else if (show == "half") {
            setFlashcards(flashcards.slice(flashcards.length / 2));
        } else {

        }
    }, [show]);
    
    const selectTopic = () => {
        setShow(showRef.current.value);
    }

    displayFlashcards = flashcards.map((item, index) => {
        return (
            <Card className="flashcard-item" shadow="sm" padding="lg" radius="md" mt="md" withBorder>
                <Text mt="md" size="sm" color="dimmed">
                    {item.text}
                </Text>
            </Card>
        )
    })

    return (
        <div className="list-flashcards">
            <Select
                label="Number of flashcards"
                placeholder="Pick One"
                defaultValue="one"
                ref={showRef}
                onChange={selectTopic}
                data={[
                    { value: "one", label: "1" },
                    { value: "half", label: "Half" },
                    { value: "All", label: "All" },
                ]}
            />
            {displayFlashcards}
        </div>
    )


}

export default ListFlashcards;