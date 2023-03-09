import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { Card, Text } from '@mantine/core';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';

const ListFlashcards = () => {
    const dbRef = collection(db, "flashcards");
    const [flashcards, setFlashcards] = useState([]);
    useEffect ( () => {
        onSnapshot(dbRef, docs => {
            // console.log(docs);
            docs.forEach(doc => {
                console.log("Hi");
                setFlashcards((flashcards) => [...flashcards, doc]);
            })
        });
    }, []);

    const displayFlashcards = flashcards.map((item, index) => {
        return (
            <Card className="flashcard-item" shadow="sm" padding="lg" radius="md" withBorder>
                <Text mt="md" size="sm" color="dimmed">
                    {item.text}
                </Text>
            </Card>
        )
    })

    return (
        <div className="list-flashcards">
            {displayFlashcards}
        </div>
    )


}

export default ListFlashcards;