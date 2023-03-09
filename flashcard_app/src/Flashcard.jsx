import React, {useState, useRef} from 'react';
import { Card, Text, Button, Title, Input, Group, rem, useMantineTheme, SimpleGrid, Image } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import FileWithPath from 'react-dropzone';

const Flashcard = () => {
    const theme = useMantineTheme();
    // const [files, setFiles] = useState<FileWithPath>([]);

    // const previews = files.map((file, index) => {
    //   const imageUrl = URL.createObjectURL(file);
    //   return (
    //     <Image
    //       key={index}
    //       src={imageUrl}
    //       imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
    //     />
    //   );
    // })
    const text = useRef();
    const submitFlashcard = () => {
        const dbRef = collection(db, "flashcards");
        const data = {
            text : text.current.value
        }
        addDoc(dbRef, data)
        .then( (docRef) => {
            console.log("Document added successfully.");
        })
        .catch( (error) => {
            console.log(error);
        })
    }

    return (
        <div className="flashcard">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Title order={2} weight={400} align="center"> Fill in your notes: </Title>
                <Text mt="md" size="sm" color="dimmed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nihil. Nisi at, sunt est vero ipsa fugiat earum quae non?
                </Text>

                <Dropzone
                    onDrop={(files) => console.log('accepted files', files)}
                    onReject={(files) => console.log('rejected files', files)}
                    maxSize={3 * 1024 ** 2}
                    accept={IMAGE_MIME_TYPE}
                    mt="md"
                // loading
                >
                    <Group position="center" spacing="xl" style={{ minHeight: rem(220), pointerEvents: 'none' }}>
                        <Dropzone.Accept> 
                            <IconUpload
                                size="3.2rem"
                                stroke={1.5}
                                color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
                            />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <IconX
                                size="3.2rem"
                                stroke={1.5}
                                color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
                            />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <IconPhoto size="3.2rem" stroke={1.5} />
                        </Dropzone.Idle>
                    </Group>
                    <div>
                        <Text size="xl" inline>
                            Drag images here or click to select files
                        </Text>
                        <Text size="sm" color="dimmed" inline mt={7}>
                            Attach as many files as you like, each file should not exceed 5mb
                        </Text>
                    </div>
                </Dropzone>
                {/* <SimpleGrid
                    cols={4}
                    breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
                    mt={previews.length > 0 ? 'xl' : 0}
                >
                    {previews}
                </SimpleGrid> */}
                <Input mt="md" placeholder="Content for flashcard" ref={text} />

                <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={submitFlashcard}>
                    Create Flashcard!
                </Button>
            </Card>
        </div>
    )
}

export default Flashcard;